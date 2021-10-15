import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import { useDispatch } from 'react-redux';
import { receivedNewPlaylist } from '../../actions/current_playlist_actions';
import { Main } from './main';

export default function Layout() {
  // const dispatch = useDispatch();

  // const addSong = () => {
  //   const newPlaylist =  {
  //     1: {
  //       id: 1, 
  //       artist: 'Jenevieve', 
  //       title: 'Resume', 
  //       filePath: '/assets/jenevieve-resume.mp3', 
  //       cover: '/assets/jenevieve-division.jpg'
  //     } 
  //   };
  //   dispatch(receivedNewPlaylist(newPlaylist));
  // }

  

  return (
    <>
      <div className='flex-row-start'>
        {/* <SidebarContainer /> */}
        <Main />
      </div>
    </>
  )
}