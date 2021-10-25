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
          <div className='album-show-details'>
            <h1>{props.playlist.title}</h1>
          </div>
        </div>
        <TrackLabels />
        {props.tracks.map((track, i) => (
          <TrackItem
            track={track}
            num={i + 1}
            artist={{ id: track.artistId, artistName: track.artistName }}
            album={{ id: track.albumId, title: track.albumTitle }}
            itemId={track.id}
            hearts={props.likedTracks}
            itemKey='trackId'
            classStyle='trackId'
            key={track.id}
          />
        ))}
      </main>
    </div>
  );
};
