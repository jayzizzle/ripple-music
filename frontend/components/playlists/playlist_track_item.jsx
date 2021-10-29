import React from 'react';
import { Link } from 'react-router-dom';
import { convertDuration } from '../../util/helper_util';
import TrackHeartContainer from '../heart_button/track_heart_container';
import { ImPlus, ImMinus } from 'react-icons/im';
import { FaRegPlayCircle } from 'react-icons/fa';

export const PlaylistTrackItem = (props) => {
  const { track } = props;
  let songList = props.songList;
  let idx;
  props.num ? (idx = props.num - 1) : (idx = track.num - 1);
  songList = songList.slice(idx).concat(songList.slice(0, idx));

  const playSong = () => {
    props.receivedNewPlaylist(songList);
    props.setToPlay({ isPlaying: true });
  };

  return (
    <div className='flex-row-between vertical-center full-width track-row'>
      <div className='flex-row-end w-5 midgray table-pad'>
        {props.num ? props.num : track.num}
      </div>
      <div className='flex-row-start flex-wrap w-25 table-pad'>
        {track.title}
        <button onClick={() => playSong()}>
          <FaRegPlayCircle />
        </button>
      </div>
      <div className='flex-row-start flex-wrap w-20 table-pad'>
        <Link className='hover-line' to={`../../../artists/${props.artist.id}`}>
          {props.artist.artistName}
        </Link>
      </div>
      <div className='flex-row-start flex-wrap w-20 table-pad'>
        <Link
          className='hover-line'
          to={`/artists/${props.artist.id}/albums/${props.album.id}`}
        >
          {props.album.title}
        </Link>
      </div>
      <div className='flex-row-end w-10 table-pad'>
        {convertDuration(track.seconds)}
      </div>
      <div className='flex-row-center w-10 table-pad'>
        <button
          onClick={() => props.deletePlaylistTrack(track.playlistTrackId)}
        >
          <ImMinus />
        </button>
        <TrackHeartContainer
          itemId={props.itemId}
          hearts={props.hearts}
          itemKey={props.itemKey}
          classStyle='trackId'
        />
      </div>
    </div>
  );
};
