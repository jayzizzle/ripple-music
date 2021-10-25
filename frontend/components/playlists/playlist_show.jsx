import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrackItem } from '../tracks/track_item';
import { TrackLabels } from '../tracks/track_labels';
import { shorten } from '../../util/helper_util';

export const PlaylistShow = (props) => {
  useEffect(() => {
    props.getPlaylist(props.match.params.playlistId);
  }, []);

  if (!props.playlist) return null;

  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        {console.log(props)}
        <div className='flex-row-start'>
          <div className='flex-row-center vertical-center playlist-colorbox-lg'>
            {shorten(props.playlist.title)}
          </div>
          <h1>{props.playlist.title}</h1>
        </div>
      </main>
    </div>
  );
};
