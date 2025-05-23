import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SongDetail.css';

const SongDetail = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAlbum = async () => {
      setLoading(true);
      setError(false);

      const originalUrl = encodeURIComponent(`https://theaudiodb.com/api/v1/json/2/album.php?m=${id}`);

      try {
        const res = await fetch(`https://api.allorigins.win/raw?url=${originalUrl}`);
        if (!res.ok) throw new Error('Error en la respuesta');
        const data = await res.json();
        setAlbum(data.album ? data.album[0] : null);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbum();
  }, [id]);

  if (loading) return <p className="loading-text">Cargando detalles...</p>;
  if (error || !album) return <p className="error-text">No se pudo cargar el álbum.</p>;

  return (
    <div className="song-detail-container">
      <h2 className="album-title">{album.strAlbum}</h2>
      <p className="artist-name">{album.strArtist}</p>
      <p className="release-year">Año: {album.intYearReleased}</p>
      {album.strAlbumThumb && (
        <img
          src={album.strAlbumThumb}
          alt={album.strAlbum}
          className="album-thumb"
        />
      )}
      <p className="album-description">{album.strDescriptionEN || 'No hay descripción disponible.'}</p>
    </div>
  );
};

export default SongDetail;
