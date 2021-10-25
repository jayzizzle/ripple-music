import React from 'react';
import { Link } from 'react-router-dom';
import { shorten } from '../../util/helper_util';

export const PlaylistItem = (props) => {
  const { playlist } = props;
  return (
    <li className='flex-col-start album-li'>
      <Link to={`/playlists/${playlist.id}`}>
        <div className='flex-row-center vertical-center playlist-colorbox'>
          {shorten(playlist.title)}
        </div>
        <h4 className='hover-line'>{playlist.title}</h4>
      </Link>
      <p className='album-sm-caps bold'>
        {playlist.numTracks === 1
          ? `${playlist.numTracks} Track`
          : `${playlist.numTracks} Tracks`}
      </p>
    </li>
  );
};
