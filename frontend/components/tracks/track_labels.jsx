import React from 'react';

export const TrackLabels = () => {
  return (
    <div className='flex-row-between vertical-center full-width track-labels'>
      <div className='flex-row-end w-5 table-pad'>#</div>
      <div className='flex-row-start flex-wrap w-25 table-pad'>TITLE</div>
      <div className='flex-row-start flex-wrap w-20 table-pad'>ARTIST</div>
      <div className='flex-row-start flex-wrap w-20 table-pad'>ALBUM</div>
      <div className='flex-row-end w-10 table-pad'>TIME</div>
      <div className='flex-row-center w-10 table-pad'></div>
    </div>
  );
};
