import React, { Component } from 'react';
import bane from './bane-rotate.jpg';
import './App.css';
import RadioStation from './components/RadioStation'

import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.getStationData = this.getStationData.bind(this)
  }

  state = {
    stationData: []
  }

  componentDidMount() {
    this.getStationData()
  }

  //Get the current artist and song title from api
  getStationData(){
    axios.get('/api/currentSongs')
      .then((res) => {
        //console.log(res.data)
        this.setState({ stationData: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    let i = 0
    //Generate all radio components from received data
    const radioComponents = this.state.stationData.map(station=> <RadioStation key={i++} name={station.Name} currentSong={station.currentSong} currentArtist={station.currentArtist} />)
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={bane} className="App-logo" alt="logo" />
          <h1 className="App-title">Now Playing</h1>
        </header>
        <p className="App-intro">
          {this.state.response}
        </p>
        <button onClick={this.getStationData}>Update Stations</button>
        <br/>
        {radioComponents}
      </div>
    );
  }
}

export default App;
