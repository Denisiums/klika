import React, { Component } from 'react';
import '../styles/app.css';
import TRACKS from '../mocks/tracks.json';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: null
    };
  }

  componentDidMount() {
    this.getTracksList()
      .then(tracks => {
        const parsedTracks = Array.isArray(tracks) ?  tracks : this._tryParseJSONString(tracks);
        this.setState({tracks: parsedTracks});
      })
      .catch(err => {
        throw err;
      });
  }

  _tryParseJSONString(string) {
    let result = null;
    try {
      result = JSON.parse(string);
    }
    catch(e) {
      throw e;
    }
    return result;
  }

  getTracksList() {
    return new Promise((resolve, reject) => {
      const tracks = TRACKS;
      if (!tracks && !tracks.length) {
        return reject(new Error('Unable to load tracks list'));
      }
      resolve(tracks);
    })
  }

  render() {
    if (!this.state.tracks) return null;
    return (
      <div className="app">
        <div>Table</div>
        <div>Filters</div>
      </div>
    );
  }
}

export default App;
