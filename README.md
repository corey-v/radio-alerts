# radio-alerts
Full stack javascript text alert/now playing service for radio songs.

This project scans online radio api endpoints for udpated song information, if the song title matches a target song then a text message is sent notifying me which song is playing and which radio station to find it on. The information is also saved in a remote mongoDb on Mlab. From there React on the front end makes a request to my api to get all current song information and displays them.

## Live Demo Front End
[Live Demo](https://radio-text-alerts.herokuapp.com/) - Clicking this link re-awakens the heroku server for 30 mins

## Main Running Process

-Node-cron schedules axios every second

-Axios makes a request to each radio station

-The response data is then parsed for relevant information

-If the current song playing on any station matches (as of this writing) any of the Billboard Top 40 songs then Twilio sends a text message out to my phone

-The data is saved to MongoDb for React to pull from

## To Do

-Save stats to a database for later data visualization

-Implement a better duplicate text check

-Live updates with Socket.io

-Add more tests for both back and front end

## Unrelated Event Managing App Demo
[Event App](https://shrouded-hollows-79404.herokuapp.com)
