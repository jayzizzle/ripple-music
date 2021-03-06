import React, { useState, useEffect } from 'react';
import { PlaylistTrackItem } from './playlist_track_item';
import { TrackLabels } from '../tracks/track_labels';
import EditPlaylistModal from '../modals/edit_playlist_modal';
import { shorten } from '../../util/helper_util';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { FaPlay } from 'react-icons/fa';
import { ImShuffle } from 'react-icons/im';
import { shuffle } from '../../util/helper_util';

export const PlaylistShow = (props) => {
  let songList;

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

  if (!props.playlist) {
    return null;
  } else {
    songList = props.tracks.map((track) => ({
      id: track.id,
      title: track.title,
      artistId: track.artistId,
      artist: track.artistName,
      albumId: track.albumId,
      album: track.albumTitle,
      audioUrl: track.audioUrl,
      cover: track.coverUrl,
      playlistTitle: props.playlist.title,
      sourceType: 'playlists',
      sourceId: props.match.params.playlistId,
    }));
  }

  const playSong = () => {
    props.receivedNewPlaylist(songList);
    props.setToPlay({ isPlaying: true });
  };

  const shuffleSongs = () => {
    songList = shuffle(songList);
    playSong();
  };

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
        <div className='flex-row-start'>
          <button className='lg-play-btn' onClick={() => playSong()}>
            <FaPlay />
            &nbsp;<span className='lg-button-text'>Play</span>
          </button>
          <button className='lg-shuffle-btn' onClick={() => shuffleSongs()}>
            <ImShuffle />
            &nbsp;<span className='lg-button-text'>Shuffle</span>
          </button>
        </div>
        <TrackLabels />
        {props.tracks.map((track, i) => (
          <PlaylistTrackItem
            num={i + 1}
            track={track}
            artist={{ id: track.artistId, artistName: track.artistName }}
            album={{ id: track.albumId, title: track.albumTitle }}
            itemId={track.id}
            hearts={props.likedTracks}
            itemKey='trackId'
            classStyle='trackId'
            key={track.id}
            userId={props.userId}
            playlists={props.playlists}
            deletePlaylistTrack={props.deletePlaylistTrack}
            receivedNewPlaylist={props.receivedNewPlaylist}
            setToPlay={props.setToPlay}
            songList={songList}
          />
        ))}
        <EditPlaylistModal
          onClose={() => {
            setShow(false);
            props.clearPlaylistErrors();
          }}
          show={show}
          playlist={props.playlist}
          patchPlaylist={props.patchPlaylist}
          userId={props.userId}
          errors={props.errors}
          clearPlaylistErrors={props.clearPlaylistErrors}
        />
      </main>
    </div>
  );
};
