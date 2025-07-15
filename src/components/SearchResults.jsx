import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong, selectAlbum } from '../redux/librarySlice';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setSearched(true);
    setResults([]);
    const apiUrl = `https://theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}`;
    const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(apiUrl)}`;

    try {
      const response = await fetch(proxyUrl);
      const data = await response.json();
      setResults(data.album || []);
    } catch (error) {
      console.error('Error al buscar álbumes:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderSkeletons = () => (
    Array(6).fill(0).map((_, index) => (
      <div className="album-card" key={index}>
        <Skeleton height={180} />
        <Skeleton width={180} height={20} style={{ marginTop: 10 }} />
        <Skeleton width={140} height={20} />
        <Skeleton height={35} style={{ marginTop: 10 }} />
      </div>
    ))
  );

  return (
    <div>
      <h2>Buscar Álbum</h2>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Ej. Coldplay"
      />
      <button onClick={handleSearch}>Buscar</button>

      <div className="album-grid">
        {loading && renderSkeletons()}

        {!loading && searched && results.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>No se encontraron álbumes.</p>
        )}

        {!loading && results.map(album => (
          <div className="album-card" key={album.idAlbum}>
            <img src={album.strAlbumThumb} alt={album.strAlbum} />
            <p><strong>{album.strAlbum}</strong></p>
            <p>{album.strArtist}</p>
            <button onClick={() => dispatch(addSong(album))}>Agregar</button>
            <button onClick={() => dispatch(selectAlbum(album))}>Ver detalles</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
