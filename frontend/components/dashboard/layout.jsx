import React from 'react';

export default function Layout() {
  return (
    <div className='flex-row-start'>
      <div className='flex-col-center sidebar'>
        <div className='sidebar-row'>
          Sidebar
        </div>
      </div>
      <main className='flex-col-start'>
        Main Window<br/>
        Excelsior!
      </main>
    </div>
  )
}
