import React, { useState, useRef, useEffect } from 'react';
import { convertDuration } from '../../../util/helper_util';

export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const player = useRef();
  
  useEffect(() => {
    player.current.volume = 0.2

    const seconds = Math.floor(player.current.duration);
    setDuration(seconds);
  }, [player?.current?.loadedmetadata, player?.current?.readyState]);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      player.current.play();
    } else {
      player.current.pause();
    }
  }


  return (
    <div className='player-wrapper flex-row-center'>

      <audio ref={player} src='/assets/brasstracks-my_boo.mp3' preload="metadata" />

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
        <input type="range" className='progress-bar' defaultValue='0' />
      </div>

      <div>{(duration && !isNaN) ? convertDuration(duration) : null }</div>

    </div>

  )
}
