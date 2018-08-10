import React, { Component } from 'react';

class RadioStation extends Component{
    render(){
        return(
            <div class='radio-station'>
                <p><b>Station:</b> {this.props.name}</p>
                <p><b>Current Song:</b> {this.props.currentSong}</p>
                <p><b>Current Artist:</b> {this.props.currentArtist}</p>
            </div>
        )
    }
}

export default RadioStation