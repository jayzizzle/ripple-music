import React from 'react';
import ArtistHeartContainer from '../heart_button/artist_heart_container';

export const ArtistItem = (props) => {
  const { artist } = props;
  return (
    <li className='flex-col-center artist-li'>
      <div className='image-crop'>
        <img className='artist-photo' src={artist.photoUrl} />
      </div>
      <div className='flex-row-center'>
        <h4>{artist.artistName}</h4>&nbsp;
        <ArtistHeartContainer
          itemId={artist.id}
          hearts={props.follows}
          itemKey='artistId'
        />
      </div>
    </li>
  );
};
