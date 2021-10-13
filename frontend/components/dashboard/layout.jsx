import React from 'react';
import SidebarContainer from './sidebar/sidebar_container';
import PlayerContainer from './player/player_container';
import { useDispatch } from 'react-redux';
import { receivedNewPlaylist } from '../../actions/current_playlist_actions';

export default function Layout() {
  const dispatch = useDispatch();

  const addSong = () => {
    const newPlaylist =  {
      1: {
        id: 1, 
        artist: 'Jenevieve', 
        title: 'Resume', 
        filePath: '/assets/jenevieve-resume.mp3', 
        cover: '/assets/jenevieve-division.jpg'
      } 
    };
    dispatch(receivedNewPlaylist(newPlaylist));
  }
  return (
    <>
      <div className='flex-row-start'>
        <SidebarContainer />
        <main className='flex-col-start'>
          Main Window<br/>
          Excelsior!
          <button onClick={addSong}>ADD SONG!</button>
        </main>
      </div>
      <PlayerContainer />
    </>
  )
}