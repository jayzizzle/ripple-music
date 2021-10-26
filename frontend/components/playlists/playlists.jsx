import React, { useState, useEffect } from 'react';
import { PlaylistItem } from './playlist_item';
import CreatePlaylistModal from '../modals/create_playlist_modal';

export const Playlists = (props) => {
  const [show, setShow] = useState(false);

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
            <PlaylistItem
              playlist={playlist}
              deletePlaylist={props.deletePlaylist}
              key={playlist.id}
            />
          ))}
          <li className='flex-col-start album-li'>
            <div
              onClick={() => setShow(true)}
              className='flex-row-center vertical-center playlist-colorbox cursor-pointer'
            >
              +
            </div>
            <h4
              onClick={() => setShow(true)}
              className='hover-line cursor-pointer'
            >
              Create Playlist
            </h4>
          </li>
        </ul>
        <CreatePlaylistModal
          onClose={() => setShow(false)}
          show={show}
          postPlaylist={props.postPlaylist}
          userId={props.userId}
        />
      </main>
    </div>
  );
};
