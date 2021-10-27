import React, { useEffect } from 'react';

export const Main = (props) => {
  if (!props.user.username) return null;

  return (
    <div className='flex-row-start black-bg'>
      <main className='flex-col-start'>
        <div className='main-bg'></div>
        <div className='flex-col-start full-width z1'>
          <div className='flex-row-between full-width artist-heading'>
            <h1 className='artist-h1'>Welcome back, {props.user.username}!</h1>
          </div>
        </div>
      </main>
    </div>
  );
};
