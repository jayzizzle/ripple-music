import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';

export default function Layout() {
  return (
    <div className='flex-row-start'>
      <SidebarContainer />
      <main className='flex-col-start'>
        Main Window<br/>
        Excelsior!
      </main>
      
    </div>
  )
}
