import React, { useEffect } from 'react';

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
          {props.followedArtists.map((artist, i) => (
            <li key={i}>{artist.artistName}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};
