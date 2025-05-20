// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [library, setLibrary] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.log('La aplicación se ha cargado correctamente.');
  }, []);

  useEffect(() => {
    console.log('La biblioteca se ha actualizado:', library);
  }, [library]);

  const handleAddToLibrary = (song) => {
    if (!library.some((item) => item.id === song.id)) {
      setLibrary([...library, song]);
    }
  };

  const handleSearch = () => {
    if (!query) return;
    fetch(`https://discoveryprovider.audius.co/v1/tracks/search?query=${encodeURIComponent(query)}&app_name=MUSICA_EBAC`)
      .then(response => response.json())
      .then(data => {
        const results = data.data.map(track => ({
          id: track.id,
          title: track.title,
          artist: track.user.name,
          album: track.genre || 'Desconocido',
          cover: track.artwork && track.artwork['1000x1000']
            ? track.artwork['1000x1000']
            : 'https://via.placeholder.com/100?text=Sin+Portada',
        }));
        setSearchResults(results);
      })
      .catch(error => console.error('Error al buscar canciones:', error));
  };

  return (
    <div className="app">
      <Header />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Buscar canciones..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '8px', width: '60%', maxWidth: '400px' }}
        />
        <button onClick={handleSearch} style={{ padding: '8px 16px', marginLeft: '10px' }}>Buscar</button>
      </div>
      <SearchResults songs={searchResults} onAdd={handleAddToLibrary} />
      <Library songs={library} />
    </div>
  );
};

export default App;
