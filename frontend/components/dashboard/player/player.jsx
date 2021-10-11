import React, { useState, useRef, useEffect } from 'react';
import { convertDuration } from '../../../util/helper_util';

export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const player = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  
  useEffect(() => {
    player.current.volume = 0.2

    const seconds = Math.floor(player.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [player?.current?.loadedmetadata, player?.current?.readyState]);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      player.current.src = '/assets/brasstracks-my_boo.mp3';
      player.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      player.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
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


  return (
    <div className='player-wrapper flex-row-center vertical-center'>

      <audio ref={player} src='/assets/brasstracks-my_boo.mp3' />

      <button>
        <i className="fas fa-step-backward"></i>
      </button>

      <button onClick={togglePlayPause}>
        <i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i>
      </button>

      <button>
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
