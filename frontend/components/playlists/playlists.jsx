import React, { useEffect } from 'react';
import { PlaylistItem } from './playlist_item';

export const Playlists = (props) => {
  useEffect(() => {
    props.getAllPlaylists(props.userId);
  }, []);

  if (!props.playlists) return null;

  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <h1 className='section-title'>My Playlists</h1>
        <ul className='flex-row-start flex-wrap'>
          {props.playlists.map((playlist) => (
            <PlaylistItem playlist={playlist} key={playlist.id} />
          ))}
        </ul>
      </main>
    </div>
  );
};
