import React, { useEffect } from 'react';
import AlbumHeartContainer from '../heart_button/album_heart_container';
import { Link } from 'react-router-dom';

export const ArtistShow = (props) => {
  useEffect(() => {
    props.getArtist(props.match.params.artistId);
  }, []);

  if (!props.artist || !props.albums) return null;

  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <h1 className='section-title'>{props.artist.artistName}</h1>
      </main>
    </div>
  );
};
