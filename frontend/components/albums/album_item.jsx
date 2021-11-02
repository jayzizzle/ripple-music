import React from 'react';
import { Link } from 'react-router-dom';
import AlbumHeartContainer from '../heart_button/album_heart_container';

export const AlbumItem = (props) => {
  const { album } = props;
  return (
    <li className='flex-col-start album-li'>
      <Link to={`/artists/${album.artistId}/albums/${album.id}`}>
        <img className='cover' src={album.coverUrl} />
      </Link>
      <div className='flex-row-between vertical-center w-150'>
        <Link
          className='hover-line'
          to={`/artists/${album.artistId}/albums/${album.id}`}
        >
          <h4>{album.title}</h4>
        </Link>
        <AlbumHeartContainer
          itemId={album.id}
          hearts={props.likes}
          itemKey='albumId'
          classStyle='albumId'
        />
      </div>
      <Link
        className='hover-line lightgray-white'
        to={`artists/${album.artistId}`}
      >
        <p className='album-artist'>{album.artistName}</p>
      </Link>
      <p className='album-sm-caps'>
        {album.year}&nbsp;
        {album.isExplicit ? <span className='explicit'>Explicit</span> : null}
      </p>
    </li>
  );
};
