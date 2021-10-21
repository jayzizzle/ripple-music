import React from 'react';
import ArtistHeartContainer from '../heart_button/artist_heart_container';

export const ArtistItem = (props) => {
  const { artist } = props;
  return (
    <li>
      {console.log(artist)}
      <div className='image-crop'>
        <img className='artist-photo' src={artist.photoUrl} />
      </div>
      <h4>{artist.artistName}</h4>
      <ArtistHeartContainer
        itemId={artist.id}
        hearts={props.follows}
        itemKey='artistId'
      />
    </li>
  );
};
