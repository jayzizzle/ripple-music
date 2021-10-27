import React, { useState } from 'react';
import AddToPlaylistModal from '../modals/add_to_playlist_modal';
import { ImPlus } from 'react-icons/im';

export const AddToPlayListButton = (props) => {
  const [show, setShow] = useState(false);
  const { userId, trackId, postPlaylistTrack, playlists } = props;

  return (
    <div className='modal-button'>
      <button onClick={() => setShow(true)} className='button-small'>
        <ImPlus />
      </button>
      <AddToPlaylistModal
        onClose={() => setShow(false)}
        show={show}
        userId={userId}
        trackId={trackId}
        postPlaylistTrack={postPlaylistTrack}
        playlists={playlists}
      />
    </div>
  );
};
