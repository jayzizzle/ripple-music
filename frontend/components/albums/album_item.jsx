import React from 'react';
import AlbumHeartContainer from '../heart_button/album_heart_container';

export const AlbumItem = (props) => {
  const { album } = props;
  return (
    <li>
      <h4>{album.title}</h4>
      <p>{album.artistName}</p>
      <p>{album.category}</p>
      <p>
        {album.year}&nbsp;{album.isExplicit ? 'Explicit' : null}
      </p>
      <AlbumHeartContainer
        itemId={album.id}
        hearts={props.likes}
        itemKey='albumId'
      />
    </li>
  );
};
