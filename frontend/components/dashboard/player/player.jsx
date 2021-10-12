import React, { useState, useRef, useEffect } from 'react';
import { convertDuration } from '../../../util/helper_util';

export const Player = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [song, setSong] = useState({});

  const player = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  const songs = props.currentPlaylist;
  let songIndex = 0;

  // loadSong(songs[songIndex]); 
  
  useEffect(() => {
    player.current.volume = 0.2 // SOLVE THIS !!!

    const { currentPlaylist } = props;

    // loadSong(songs[songIndex]); 

    const seconds = Math.floor(player.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [player?.current?.loadedmetadata, player?.current?.readyState]);

  const loadSong = (song) => {
    player.current.src = song.filePath;
    player.current.play();
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      player.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      player.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    if (player.current.currentTime === player.current.duration) {
      handleSongEnded();
    }
    progressBar.current.value = player.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    player.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();

  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const handleSongEnded = () => {
    togglePlayPause();
  }


  return (
    <div className='player-wrapper flex-row-center vertical-center'>

      <audio ref={player} src={songs[0].filePath} />
      {/* <audio ref={player} src='https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/wolftyla-wolf/03+All+Tinted.mp3' /> */}

      <button>
        <i className="fas fa-step-backward"></i>
      </button>

      <button onClick={togglePlayPause}>
        <i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i>
      </button>

      <button onClick={() => loadSong(songs[1])}>
        <i className="fas fa-step-forward"></i>
      </button>

      <div>{convertDuration(currentTime)}</div>

      <div>
        <input type="range" className='progressBar' defaultValue={0} ref={progressBar} onChange={changeRange} />
      </div>

      <div>{(duration && !isNaN(duration)) ? convertDuration(duration) : '0:00' }</div>

    </div>

  )
}
