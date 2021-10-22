import React, { useEffect } from 'react';
import AlbumHeartContainer from '../heart_button/album_heart_container';
import { Link } from 'react-router-dom';
import { convertDuration } from '../../util/helper_util';

export const AlbumShow = (props) => {
  useEffect(() => {
    props.getAlbum(props.match.params.albumId);
  }, []);

  if (!props.album || !props.artist) return null;

  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <div className='flex-row-start'>
          <img className='cover-lg' src={props.album.coverUrl} />
          <div className='album-show-details'>
            <h1>{props.album.title}</h1>
            <Link
              className='hover-line lightgray-white'
              to={`artists/${props.artist.id}`}
            >
              <h3 className='vertical-text-separation'>
                {props.artist.artistName}
              </h3>
            </Link>
            <p className='album-sm-caps'>
              {props.album.year}&nbsp;
              {props.album.isExplicit ? (
                <span className='explicit'>Explicit</span>
              ) : null}
            </p>
            <AlbumHeartContainer
              itemId={props.album.id}
              hearts={props.likedAlbums}
              itemKey='albumId'
            />
          </div>
        </div>
        <div className='flex-row-between vertical-center full-width track-labels'>
          <div className='flex-row-start w-5'>#</div>
          <div className='flex-row-start flex-wrap w-25'>TITLE</div>
          <div className='flex-row-start flex-wrap w-20'>ARTIST</div>
          <div className='flex-row-start flex-wrap w-20'>ALBUM</div>
          <div className='flex-row-end w-10'>TIME</div>
          <div className='flex-row-end w-10'>MORE</div>
        </div>
        {props.tracks.map((track) => (
          <div
            className='flex-row-between vertical-center full-width track-row'
            key={track.id}
          >
            <div className='flex-row-start w-5 midgray'>{track.num}</div>
            <div className='flex-row-start flex-wrap w-25'>{track.title}</div>
            <div className='flex-row-start flex-wrap w-20'>
              {props.artist.artistName}
            </div>
            <div className='flex-row-start flex-wrap w-20'>
              {props.album.title}
            </div>
            <div className='flex-row-end w-10'>
              {convertDuration(track.seconds)}
            </div>
            <div className='flex-row-end w-10'>MORE</div>
          </div>
        ))}
      </main>
    </div>
  );
};
