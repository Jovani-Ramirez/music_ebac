import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedAlbum } from '../redux/librarySlice';

const AlbumDetails = () => {
  const album = useSelector(state => state.libraryState.selectedAlbum);
  const dispatch = useDispatch();

  if (!album) return null;

  return (
    <div className="modal-overlay" onClick={() => dispatch(clearSelectedAlbum())}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={() => dispatch(clearSelectedAlbum())}>✕</button>
        <h2>{album.strAlbum}</h2>
        <p><strong>Artista:</strong> {album.strArtist}</p>
        <p><strong>Género:</strong> {album.strGenre || 'N/A'}</p>
        <p><strong>Año:</strong> {album.intYearReleased || 'N/A'}</p>
        <p>{album.strDescriptionEN.slice(0, 100) || 'Sin descripción.'}</p>
        {album.strAlbumThumb && (
          <img src={album.strAlbumThumb} alt={album.strAlbum} />
        )}
      </div>
    </div>
  );
};

export default AlbumDetails;
