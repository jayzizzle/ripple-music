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
        <h1 className='section-title'>My Artists</h1>
        <ul className='flex-row-start flex-wrap'>
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
