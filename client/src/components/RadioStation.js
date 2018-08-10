import React, { Component } from 'react';

class RadioStation extends Component{
    constructor(props){
        super(props);

        // this.state = {
        //     name: 'a',
        //     currentSong: 'b',
        //     currentArtist: 'c'
        // }
    }

    render(){
        return(
            <div class='radio-station'>
                <p>{this.props.name}</p>
                <p>{this.props.currentSong}</p>
                <p>{this.props.currentArtist}</p>
            </div>
        )
    }
}

export default RadioStation