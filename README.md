# radio-alerts
Full stack javascript text alert service for radio song

This project scans online radio api endpoints for udpated song information, if the song title matches a target song then a text message is sent notifying me which song is playing and which radio station to find it on.

#Main Running Process

-Node-cron schedules axios every 2 seconds

-Axios makes a request to each radio station

-The response data is then parsed for relevant information

-If the current song playing on any station matches (as of this writing) any of the Billboard Top 40 songs then Twilio sends a text message out to my phone

#To Do

-Save stats to a database for later data visualization

-Modularize driver functions


