import React, { useEffect } from 'react';
import { TrackLabels } from './track_labels';
import { TrackItem } from './track_item';

export const Tracks = (props) => {
  useEffect(() => {
    props.getAllTrackLikes(props.userId);
    console.log(props);
  }, []);

  if (!props.likedTracks) return null;
  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <h1 className='section-title'>My Tracks</h1>
        {console.log(props)}
        <TrackLabels />
        {props.likedTracks.map((track) => (
          <TrackItem
            track={track}
            artist={{ id: track.artistId, artistName: track.artistName }}
            album={{ id: track.albumId, title: track.albumTitle }}
            itemId={track.id}
            hearts={props.likes}
            itemKey='trackId'
            classStyle='trackId'
            key={track.id}
            userId={props.userId}
            playlists={props.playlists}
            postPlaylistTrack={props.postPlaylistTrack}
          />
        ))}
      </main>
    </div>
  );
};
