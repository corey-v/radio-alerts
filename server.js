/*
Author: Corey Valentyne
*/
const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api')
const config = require('./config/config')
const twilio = require('twilio')
const axios = require('axios')
const cron = require('node-cron')

const mongojs = require('mongojs')
const db = mongojs(config.database, ['currentlyPlaying'])

const app = express();
const port = process.env.PORT || 5000;

const client = new twilio(config.accountSid, config.authToken)

const stations = require('./config/stations')
const songsToLookFor = require('./top40songs')
const helperFunctions = require('./helperFunctions');

// API calls
app.use('/api', apiRouter)

/******************************
 * Radio Scanning & Text Messaging 
 * *****************************/
let matchedSongs = [];

//Every 5 seconds request updated data from all stations
cron.schedule('*/5 * * * * *', () => {

  stations.forEach((station) => {

    axios.get(station.URL, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" } })
      .then(res => {

        //Extract the artist and song title from response data
        let stationData = helperFunctions.getArtistAndTitle(station.Type, res)
        console.log(stationData, station.Name)

        //Update the station's current artist and song title
        station.currentArtist = stationData[0]
        station.currentSong = stationData[1]

        //Update currently playing song in database
        db.currentlyPlaying.update({Name: station.Name},
          station, {}, function(err, data){
            if(err){
              console.log(err)
            }
            /*else{
              console.log(data)
            }*/
          })

        //Check to see if the song currently playing matches a song to look for and if it hasn't been seen in the past 5 minutes
        if (songsToLookFor.includes(stationData[1]) && !matchedSongs.includes(stationData[1])) {
          console.log(`A match was found! ${stationData[1]} on ${station.Name}`)

          //Adds found song to matched list so it doesn't get picked up again on next cron
          matchedSongs.push(stationData[1])

          //Send text alert of song found on which station
          sendText(stationData[1], station.Name)
        }

      }).catch(err => {
        console.log(err)
      })
  })

})

//Clear the matched songs every 5th minute
cron.schedule("*/5 * * * *", () => {
  matchedSongs = [];
});

/**
 * 
 * @param {String} song The song name you want to send
 * @param {String} station The name of the radio station it came from
 */
function sendText(song, station) {
  client.messages.create({
      body: `${song} was found on ${station}`,
      to: config.to,  // Text this number
      from: config.from // From a valid Twilio number
  })
      .then((message) => console.log(message.sid));
}

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));