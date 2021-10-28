import React from 'react';
import { Link } from 'react-router-dom';
import { convertDuration } from '../../util/helper_util';
import TrackHeartContainer from '../heart_button/track_heart_container';
import { AddToPlayListButton } from '../playlists/add_to_playlist_button';
import { FaRegPlayCircle } from 'react-icons/fa';

export const TrackItem = (props) => {
  const { track } = props;
  const song = {
    id: track.id,
    title: track.title,
    artist: props.artist.artistName,
    album: props.album.title,
    audioUrl: track.audioUrl,
    cover: props.album.coverUrl,
  };
  return (
    <div className='flex-row-between vertical-center full-width track-row'>
      <div className='flex-row-end w-5 midgray table-pad'>
        {track.num ? track.num : props.num}
      </div>
      <div className='flex-row-start flex-wrap w-25 table-pad'>
        {track.title}
        <button onClick={() => props.addedSingleTracklist(song)}>
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
        <AddToPlayListButton
          userId={props.userId}
          trackId={track.id}
          postPlaylistTrack={props.postPlaylistTrack}
          playlists={props.playlists}
        />
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
