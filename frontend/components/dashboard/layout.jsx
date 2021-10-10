import React from 'react';

export default function Layout() {
  return (
    <div className='flex-row-start'>
      <div className='flex-col-center sidebar'>
        <div className='flex-col-center sidebar-inner'>
          Username
        </div>
      </div>
      <main className='flex-col-start'>
        super duper main hyphy section
      </main>
    </div>
  )
}
