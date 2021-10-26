import React from 'react';
import { Link } from 'react-router-dom';
import { shorten } from '../../util/helper_util';
import { HiOutlineTrash } from 'react-icons/hi';

export const PlaylistItem = (props) => {
  const { playlist } = props;
  return (
    <li className='flex-col-start album-li'>
      <Link to={`/playlists/${playlist.id}`}>
        <div className='flex-row-center vertical-center playlist-colorbox'>
          {shorten(playlist.title)}
        </div>
      </Link>
      <div className='flex-row-between vertical-top w-150'>
        <h4 className='hover-line'>
          <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
        </h4>
        <button onClick={() => props.deletePlaylist(playlist.id)}>
          <HiOutlineTrash />
        </button>
      </div>
      <p className='album-sm-caps bold'>
        {playlist.numTracks === 1
          ? `${playlist.numTracks} Track`
          : `${playlist.numTracks} Tracks`}
      </p>
    </li>
  );
};
