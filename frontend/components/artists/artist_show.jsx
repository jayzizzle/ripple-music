import React, { useEffect } from 'react';
import { AlbumItem } from '../albums/album_item';
import ArtistHeartContainer from '../heart_button/artist_heart_container';
import { Link } from 'react-router-dom';

export const ArtistShow = (props) => {
  useEffect(() => {
    props.getArtist(props.match.params.artistId);
  }, []);

  if (!props.artist || !props.albums) return null;

  return (
    <div className='flex-row-start black-bg'>
      <main className='flex-col-start'>
        <div
          className='artist-bg'
          style={{
            backgroundImage: `linear-gradient(transparent, #000 75%), url(${props.artist.photoUrl})`,
          }}
        ></div>
        <div className='flex-col-start full-width z1'>
          <div className='flex-row-between full-width artist-heading'>
            <h1 className='artist-h1'>{props.artist.artistName}</h1>
            <ArtistHeartContainer
              itemId={props.artist.id}
              hearts={props.follows}
              itemKey='artistId'
              classStyle='heart-btn-lg'
            />
          </div>
          <Link to={`/artists/${props.artist.id}`}>
            <div className='image-crop' width='150' height='150'>
              <img
                className='artist-photo'
                src={props.artist.photoUrl}
                width='150'
                height='150'
              />
            </div>
          </Link>
          <h3 className='subtitle'>Albums by {props.artist.artistName}</h3>
          <ul className='flex-row-start flex-wrap'>
            {props.albums.map((album) => (
              <AlbumItem
                album={album}
                likes={props.likedAlbums}
                key={album.id}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};
