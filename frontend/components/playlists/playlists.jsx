import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlaylistItem } from './playlist_item';

export const Playlists = (props) => {
  useEffect(() => {
    props.getAllPlaylists(props.userId);
  }, []);

  // if (!props.playlists) return null;

  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <h1 className='section-title'>My Playlists</h1>
        <ul className='flex-row-start flex-wrap'>
          {props.playlists.map((playlist) => (
            <PlaylistItem playlist={playlist} key={playlist.id} />
          ))}
          <li className='flex-col-start album-li'>
            <Link to={'/playlists/new'}>
              <div className='flex-row-center vertical-center playlist-colorbox'>
                +
              </div>
              <h4 className='hover-line'>Create New Playlist</h4>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
};
