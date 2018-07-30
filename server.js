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

const app = express();
const port = process.env.PORT || 5000;

const client = new twilio(config.accountSid, config.authToken)

const stations = require('./config/stations')
const songsToLookFor = require('./top40songs')

// API calls
app.use('/api', apiRouter)

/******************************
 * Radio Scanning & Text Messaging 
 * *****************************/

//Every 2 seconds request updated data from all stations
cron.schedule('*/2 * * * * *', ()=>{

  stations.forEach((station)=>{
    
    axios.get(station.URL, { headers: {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko" }})
    .then(res=>{

      //Extract the song title and artist from response data
      let stationData = getArtistAndTitle(station.Type, res)
      console.log(stationData)
      //Check to see if the song currently playing matches
      songsToLookFor.forEach((song)=>{
        if(song == stationData[1]){
          //Send a text notification of the song and station
          console.log(`A match was found! ${song} on ${station.Name}`)
          sendText(stationData[1], station.Name)
        } 
      })
    }).catch(err=>{
      console.log(err)
    })
  })
  
})


/********************************
 * Functions
 ********************************/

//Convert song title to title case and remove any backslashes
function convertToTitleCase(song){
  return song.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ').replace("'", "");
}

//Remove extra song title data such as "featuring ..." and returns the string

/**
 * @param {Number} stationType Type of radio station
 * @param {JSON} res The response data from the station
 * @return {Array} An array of artist and title
 */
function getArtistAndTitle(stationType, res){
  let artist = "";
  let title = "";
  //Depending on the station it will have different processing requirements
  switch(stationType){
    case 1:
      artist = res.data.artist
      title = res.data.title
      break
    case 2:
      artist = res.data.artist
      title = res.data.song_title
      break
    case 3:
      artist = res.data[9].TPE1
      title = res.data[9].TIT2
      break
    case 4:
      let myData = JSON.parse(res.data.substring(14, res.data.length - 1))
      artist = myData.artist_name
      title = myData.song_name
      break
  }
  return [artist, convertToTitleCase(title)]
}

/**
 * 
 * @param {String} song The song name you want to send
 * @param {String} station The name of the radio station it came from
 */
function sendText(song, station){
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
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));