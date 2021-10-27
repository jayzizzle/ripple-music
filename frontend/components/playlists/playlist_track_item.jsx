import React from 'react';
import { Link } from 'react-router-dom';
import { convertDuration } from '../../util/helper_util';
import TrackHeartContainer from '../heart_button/track_heart_container';
import { ImPlus, ImMinus } from 'react-icons/im';

export const PlaylistTrackItem = (props) => {
  const { track } = props;
  return (
    <div className='flex-row-between vertical-center full-width track-row'>
      <div className='flex-row-end w-5 midgray table-pad'>
        {track.num ? track.num : props.num}
      </div>
      <div className='flex-row-start flex-wrap w-25 table-pad'>
        {track.title}
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
