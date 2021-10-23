import React, { useEffect } from 'react';
import AlbumHeartContainer from '../heart_button/album_heart_container';
import { Link } from 'react-router-dom';
import { convertDuration } from '../../util/helper_util';
import { FaRegHeart } from 'react-icons/fa';
import { ImPlus } from 'react-icons/im';

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
              to={`../../../artists/${props.artist.id}`}
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
          <div className='flex-row-end w-5 table-pad'>#</div>
          <div className='flex-row-start flex-wrap w-25 table-pad'>TITLE</div>
          <div className='flex-row-start flex-wrap w-20 table-pad'>ARTIST</div>
          <div className='flex-row-start flex-wrap w-20 table-pad'>ALBUM</div>
          <div className='flex-row-end w-10 table-pad'>TIME</div>
          <div className='flex-row-center w-10 table-pad'></div>
        </div>
        {props.tracks.map((track) => (
          <div
            className='flex-row-between vertical-center full-width track-row'
            key={track.id}
          >
            <div className='flex-row-end w-5 midgray table-pad'>
              {track.num}
            </div>
            <div className='flex-row-start flex-wrap w-25 table-pad'>
              {track.title}
            </div>
            <div className='flex-row-start flex-wrap w-20 table-pad'>
              <Link
                className='hover-line'
                to={`../../../artists/${props.artist.id}`}
              >
                {props.artist.artistName}
              </Link>
            </div>
            <div className='flex-row-start flex-wrap w-20 table-pad'>
              {props.album.title}
            </div>
            <div className='flex-row-end w-10 table-pad'>
              {convertDuration(track.seconds)}
            </div>
            <div className='flex-row-center w-10 table-pad'>
              <button>
                <ImPlus />
              </button>
              <button>
                <FaRegHeart />
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};
