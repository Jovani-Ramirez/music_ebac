import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSong, selectAlbum } from '../redux/librarySlice';

const Library = () => {
  const albums = useSelector(state => state.libraryState.albums);
  const dispatch = useDispatch();

  return (
    <div className="album-grid">
    {albums.map(album => (
      <div className="album-card" key={album.idAlbum}>
        <img src={album.strAlbumThumb} alt={album.strAlbum} />
        <p><strong>{album.strAlbum}</strong></p>
        <p>{album.strArtist}</p>
        <button onClick={() => dispatch(removeSong(album.idAlbum))}>Eliminar</button>
        <button onClick={() => dispatch(selectAlbum(album))}>Ver detalles</button>
      </div>
    ))}
  </div>
  );
};

export default Library;
