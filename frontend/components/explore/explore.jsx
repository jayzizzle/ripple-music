import React, { useEffect } from 'react';
import { AlbumItem } from '../albums/album_item';
import { ArtistItem } from '../artists/artist_item';

export const Explore = (props) => {
  useEffect(() => {
    props.getAllAlbums();
    props.getAllArtists();
    return function cleanup() {
      props.clearAlbums();
    };
  }, []);

  if (!props.albums || !props.artists) return null;

  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <h1 className='section-title'>Albums</h1>
        <ul className='flex-row-start flex-wrap'>
          {props.albums.map((album) => (
            <AlbumItem album={album} likes={props.albumLikes} key={album.id} />
          ))}
        </ul>
        <div className='break'></div>
        <h1 className='section-title'>Artists</h1>
        <ul className='flex-row-start flex-wrap'>
          {props.artists.map((artist) => (
            <ArtistItem
              artist={artist}
              follows={props.follows}
              key={artist.id}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};
