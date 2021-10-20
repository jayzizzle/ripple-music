import React, { useEffect } from 'react';
import { ArtistItem } from './artist_item';

export const Artists = (props) => {
  useEffect(() => {
    props.getAllFollows(props.userId);
  }, []);

  if (!props.followedArtists) return null;

  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <h3>Artists</h3>
        <ul>
          {props.followedArtists.map((artist) => (
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
