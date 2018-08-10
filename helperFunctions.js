//Convert song title to title case and remove any backslashes
function convertToTitleCase(song) {
    if (song.indexOf("(") != -1) {
        //Find position of bracket and slice
        song = song.substring(0, song.indexOf("(") - 1)
    }
    return song.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ').replace("'", "")
}

/**
 * @param {Number} stationType Type of radio station
 * @param {JSON} res The response data from the station
 * @return {Array} An array of artist and title
 */
function getArtistAndTitle(stationType, res) {
    let artist = "";
    let title = "";
    //Depending on the station it will have different processing requirements
    switch (stationType) {
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



module.exports = {
    convertToTitleCase: convertToTitleCase,
    getArtistAndTitle: getArtistAndTitle
}