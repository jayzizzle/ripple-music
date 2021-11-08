import React from 'react';
import { Link } from 'react-router-dom';
import ArtistHeartContainer from '../heart_button/artist_heart_container';

export const ArtistItem = (props) => {
  const { artist } = props;
  return (
    <li className='flex-col-center artist-li'>
      <Link to={`/artists/${artist.id}`}>
        <div className='image-crop' width='150' height='150'>
          <img
            className='artist-photo'
            src={artist.photoUrl}
            width='150'
            height='150'
          />
        </div>
      </Link>
      <div className='flex-row-center'>
        <h4>
          <Link className='hover-line' to={`/artists/${artist.id}`}>
            {artist.artistName}
          </Link>
        </h4>
        &nbsp;
        <ArtistHeartContainer
          itemId={artist.id}
          hearts={props.follows}
          itemKey='artistId'
          classStyle='artistId'
        />
      </div>
    </li>
  );
};
