import React, { useState, useRef, useEffect } from 'react';
import { convertDuration } from '../../../util/helper_util';

export const Player = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0.5)
  
  const player = useRef();
  const volumeSlider = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  
  if (!props.currentPlaylist) return null;
  
  const songs = props.currentPlaylist;
  
  const [songIndex, setSongIndex] = useState({num: 0});
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [cover, setCover] = useState('');
  const [songUrl, setSongUrl] = useState('');

  useEffect(() => {
    player.current.volume = currentVolume;

    console.log('THERE WAS A RE-RENDER')

    if (!songs[songIndex.num]) songIndex.num = 0;
    let currentSong = songs[songIndex.num];

    setArtist(currentSong.artist);
    setTitle(currentSong.title);
    setCover(currentSong.cover);
    setSongUrl(currentSong.filePath);

    const seconds = Math.floor(player.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [player?.current?.loadedmetadata, player?.current?.readyState]);

  const loadSong = (song) => {
    player.current.src = song.filePath;
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

  const prevSong = () => {
    if (player.current.currentTime > 3) {
      player.current.currentTime = 0;
    } else {
      songIndex.num--;
      if (songIndex.num < 0) {
        songIndex.num = songs.length - 1;
      }
      loadSong(songs[songIndex.num]);
      if (isPlaying) player.current.play();
    }
  }

  const nextSong = () => {
    songIndex.num++
    if (songIndex.num > songs.length - 1) {
      songIndex.num = 0;
    }
    loadSong(songs[songIndex.num]);
    if (isPlaying) player.current.play()
  };

  const whilePlaying = () => {
    if (player.current.currentTime === player.current.duration) {
      songIndex.num++
      if (songIndex.num > songs.length - 1) {
        songIndex.num = 0;
      }
      loadSong(songs[songIndex.num]);
      player.current.play()
    }
    progressBar.current.value = player.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const adjustVolume = () => {
    player.current.volume = volumeSlider.current.value;
    setCurrentVolume(volumeSlider.current.value);
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
    <div className='player-wrapper flex-row-between'>

      {/* SOLVE WHY THIS BUGS OUT NEXT SONG */}
      {/* <audio ref={player} src={songUrl} /> */}
      
      <audio ref={player} src={props.currentPlaylist ? props.currentPlaylist[0].filePath : ''} />
      
      {/* <audio autoPlay={true} ref={player} src={songs[0].filePath} /> */}
      {/* <audio ref={player} src='https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/wolftyla-wolf/03+All+Tinted.mp3' /> */}

      <div className ='flex-row-start vertical-center player-side player-left'>
        <div className='player-cover'>
          <img src={cover} />
        </div>
        <div className='player-info'>
          <p className='player-title'>{title}</p>
          <p className='player-artist'>{artist}</p>
        </div>
      </div>

      <div className='flex-col-center player-center'>
        <div className='flex-row-center player-controls'>
          <button className='player-btn' onClick={prevSong}>
            <i className="fas fa-step-backward"></i>
          </button>
          <button className='player-btn' onClick={togglePlayPause}>
            <i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i>
          </button>
          <button className='player-btn' onClick={nextSong}>
            <i className="fas fa-step-forward"></i>
          </button>
        </div>
        <div className='flex-row-center vertical-center player-seek'>
          <div className='player-time'>{convertDuration(currentTime)}</div>
          <div>
            <input type="range" className='progressBar' defaultValue={0} ref={progressBar} onChange={changeRange} />
          </div>
          <div className='player-time'>{(duration && !isNaN(duration)) ? convertDuration(duration) : '0:00' }</div>
        </div>
      </div>

      <div className='flex-row-end vertical-center player-side player-right'>
        <input
            type='range' 
            min='0' 
            max='1' 
            step='0.01' 
            defaultValue={currentVolume}
            onChange={adjustVolume}
            ref={volumeSlider}
            className='volumeSlider'
          />
      </div>

    </div>

  )
}
