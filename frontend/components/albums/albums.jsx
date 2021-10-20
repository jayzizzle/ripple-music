import React, { useEffect } from 'react';
import { AlbumItem } from './album_item';

export const Albums = (props) => {
  useEffect(() => {
    props.getAllAlbumLikes(props.userId);
  }, []);

  if (!props.likedAlbums) return null;

  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <h3>Albums</h3>
        <ul>
          {props.likedAlbums.map((album) => (
            <AlbumItem album={album} likes={props.likes} key={album.id} />
          ))}
        </ul>
      </main>
    </div>
  );
};
