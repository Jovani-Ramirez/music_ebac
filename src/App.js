// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import SongDetail from './components/SongDetail';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [library, setLibrary] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddToLibrary = (song) => {
    if (!library.some((item) => item.id === song.id)) {
      setLibrary([...library, song]);
    }
  };
  const handleSearch = (searchTerm) => {
    if (!searchTerm) return;
    setLoading(true);
    setError(null);
    setSearchResults([]);
    setQuery(searchTerm);
  
    const apiUrl = `https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`;
  
    fetch(proxyUrl)
      .then(response => {
        if (!response.ok) throw new Error('Error en la respuesta');
        return response.json();
      })
      .then(data => {
        setLoading(false);
        if (!data.album) {
          setSearchResults([]);
          setError('No se encontraron álbumes para ese artista.');
          return;
        }
  
        const results = data.album.map(album => ({
          id: album.idAlbum,
          title: album.strAlbum,
          artist: album.strArtist,
          album: album.strAlbum,
          cover: album.strAlbumThumb || 'https://via.placeholder.com/100?text=Sin+Portada',
        }));
  
        setSearchResults(results);
      })
      .catch(() => {
        setLoading(false);
        setError('Hubo un problema al cargar los datos. Intenta nuevamente.');
      });
  };
  

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <SearchBar onSearch={handleSearch} />
                {loading && <p style={{ textAlign: 'center' }}>Cargando...</p>}
                {error && (
                  <div style={{ textAlign: 'center' }}>
                    <p>{error}</p>
                    <button onClick={() => handleSearch(query)}>Reintentar</button>
                  </div>
                )}
                {!loading && !error && (
                  <>
                    <SearchResults songs={searchResults} onAdd={handleAddToLibrary} />
                    <Library songs={library} />
                  </>
                )}
              </>
            )}
          />
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
