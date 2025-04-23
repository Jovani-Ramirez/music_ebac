import React, { Component } from 'react';
import Header from './components/Header';
import Song from './components/Song';
import './App.css';

class App extends Component {
  state = {
    songs: [],
  };

  componentDidMount() {
    console.log('La aplicación se ha cargado correctamente.');
    fetch('https://discoveryprovider.audius.co/v1/tracks/trending?app_name=MUSICA_EBAC')
      .then(response => response.json())
      .then(data => {
        const songs = data.data.map(track => ({
          title: track.title,
          artist: track.user.name,
          album: track.genre || 'Desconocido',
          cover: track.artwork && track.artwork['1000x1000']
            ? track.artwork['1000x1000']
            : 'https://via.placeholder.com/100?text=Sin+Portada',
        }));
        this.setState({ songs });
      })
      .catch(error => console.error('Error al obtener las canciones:', error));
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="song-list">
          {this.state.songs.map((song, index) => (
            <Song
              key={index}
              title={song.title}
              artist={song.artist}
              album={song.album}
              cover={song.cover}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
