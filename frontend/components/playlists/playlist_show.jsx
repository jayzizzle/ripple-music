import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrackItem } from '../tracks/track_item';
import { TrackLabels } from '../tracks/track_labels';
import EditPlaylistModal from '../modals/edit_playlist_modal';
import { shorten } from '../../util/helper_util';
import { HiOutlinePencilAlt } from 'react-icons/hi';

export const PlaylistShow = (props) => {
  const [show, setShow] = useState(false);

  const renderEdit = (currentUserId, playlistUserId) => {
    if (currentUserId === playlistUserId) {
      return (
        <button onClick={() => setShow(true)} className='edit-btn'>
          <HiOutlinePencilAlt />
        </button>
      );
    }
  };

  useEffect(() => {
    props.getPlaylist(props.match.params.playlistId);
  }, []);

  if (!props.playlist) return null;

  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <div className='flex-row-start'>
          <div className='flex-row-center vertical-center playlist-colorbox-lg'>
            {shorten(props.playlist.title)}
          </div>
          <div className='playlist-show-details'>
            <h1>{props.playlist.title}</h1>
            {renderEdit(props.userId, props.playlist.userId)}
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
        <EditPlaylistModal
          onClose={() => setShow(false)}
          show={show}
          playlist={props.playlist}
          patchPlaylist={props.patchPlaylist}
          userId={props.userId}
        />
      </main>
    </div>
  );
};
