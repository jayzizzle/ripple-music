import React from 'react';
import { HeartButton } from '../heart_button/heart_button';

export const ArtistItem = (props) => {
  const { artist } = props;
  return (
    <li>
      <h4>{artist.artistName}</h4>
      <HeartButton />
    </li>
  );
};
