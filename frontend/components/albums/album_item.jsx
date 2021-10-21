import React from 'react';
import AlbumHeartContainer from '../heart_button/album_heart_container';

export const AlbumItem = (props) => {
  const { album } = props;
  return (
    <li className='flex-col-start album-li'>
      <img className='cover' src={album.coverUrl} />
      <h4>{album.title}</h4>
      <p className='album-artist'>{album.artistName}</p>
      <p className='album-sm-caps'>
        {album.year}&nbsp;
        {album.isExplicit ? <span class='explicit'>Explicit</span> : null}
      </p>
      <AlbumHeartContainer
        itemId={album.id}
        hearts={props.likes}
        itemKey='albumId'
      />
    </li>
  );
};
