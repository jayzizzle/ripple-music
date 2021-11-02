import React, { useEffect } from 'react';
import { AlbumItem } from '../../albums/album_item';
import { ArtistItem } from '../../artists/artist_item';
import { FiRefreshCcw } from 'react-icons/fi';

export const Main = (props) => {
  useEffect(() => {
    props.getAllFeatures();
    return function cleanup() {
      props.clearAlbums();
    };
  }, []);

  if (!props.user.username || !props.albums || !props.artists) {
    return null;
  }

  return (
    <div className='flex-row-start black-bg'>
      <main className='flex-col-start'>
        <div className='main-bg'></div>
        <div className='flex-col-start full-width z1'>
          <div className='full-width main-heading'>
            <h1 className='artist-h1'>Welcome back, {props.user.username}!</h1>
            <button
              className='refresh-btn hover-cyan'
              onClick={() => props.getAllFeatures()}
            >
              Refresh Dashboard&nbsp;&nbsp;
              <FiRefreshCcw />
            </button>
          </div>
          <h1 className='section-title'>Featured Albums</h1>
          <ul className='flex-row-start flex-wrap'>
            {props.albums.map((album) => (
              <AlbumItem
                album={album}
                likes={props.albumLikes}
                key={album.id}
              />
            ))}
          </ul>
          <div className='break'></div>
          <h1 className='section-title'>Featured Artists</h1>
          <ul className='flex-row-start flex-wrap'>
            {props.artists.map((artist) => (
              <ArtistItem
                artist={artist}
                follows={props.follows}
                key={artist.id}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};
