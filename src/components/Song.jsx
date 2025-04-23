import React, { Component } from 'react';

class Song extends Component {
    render() {
      const { title, artist, album, cover } = this.props;
  
      return (
        <div className="song">
          <img src={cover} alt={`Portada de ${title}`} className="cover" />
          <div>
            <h2>{title}</h2>
            <p>{artist}</p>
            <p>{album}</p>
          </div>
        </div>
      );
    }
  }
export default Song;
