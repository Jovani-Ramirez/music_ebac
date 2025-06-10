// src/components/SongDetail/index.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Title,
  Artist,
  Year,
  AlbumThumb,
  Description,
  LoadingText,
  ErrorText
} from './SongDetail.styles';

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

  if (loading) return <LoadingText>Cargando detalles...</LoadingText>;
  if (error || !album) return <ErrorText>No se pudo cargar el álbum.</ErrorText>;

  return (
    <Container>
      <Title>{album.strAlbum}</Title>
      <Artist>{album.strArtist}</Artist>
      <Year>Año: {album.intYearReleased}</Year>
      {album.strAlbumThumb && (
        <AlbumThumb
          src={album.strAlbumThumb}
          alt={album.strAlbum}
        />
      )}
      <Description>{album.strDescriptionEN || 'No hay descripción disponible.'}</Description>
    </Container>
  );
};

export default SongDetail;
