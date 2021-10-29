import React, { useState, useRef, useEffect } from 'react';
import { convertDuration } from '../../../util/helper_util';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

export const Test = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0.5);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const player = useRef();
  const volumeSlider = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  const songs = props.currentPlaylist;

  const [songIndex, setSongIndex] = useState({ num: 0 });
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [cover, setCover] = useState('');
  const [songUrl, setSongUrl] = useState('');

  useEffect(() => {
    player.current.volume = currentVolume;

    const seconds = Math.floor(player.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [player?.current?.loadedmetadata, player?.current?.readyState]);

  useEffect(() => {
    songIndex.num = 0;
  }, [songs]);

  useEffect(() => {
    // if (!songs[songIndex.num]) songIndex.num = 0;
    let currentSong = songs[songIndex.num];

    setArtist(currentSong.artist);
    setTitle(currentSong.title);
    setPlaylistTitle(currentSong.playlistTitle);
    setCover(currentSong.cover);
    setSongUrl(currentSong.audioUrl);
  }, [player?.current?.src]);

  useEffect(() => {
    if (!isPlaying && props.isCurrentlyPlaying) {
      togglePlayPause();
      setIsAutoPlay(true);
    }
  }, [props.isCurrentlyPlaying]);

  const loadSong = (song) => {
    player.current.src = song.audioUrl;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      player.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
      setIsAutoPlay(true);
      if (!props.isCurrentlyPlaying) props.setToPlay({ isPlaying: true });
    } else {
      player.current.pause();
      cancelAnimationFrame(animationRef.current);
      setIsAutoPlay(false);
      props.setToPause({ isPlaying: false });
    }
  };

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
  };

  const nextSong = () => {
    songIndex.num++;
    if (songIndex.num > songs.length - 1) {
      songIndex.num = 0;
    }
    loadSong(songs[songIndex.num]);
    if (isPlaying) {
      player.current.play();
    } else {
      player.current.pause();
    }
  };

  const whilePlaying = () => {
    if (player.current.currentTime === player.current.duration) {
      songIndex.num++;
      if (songIndex.num > songs.length - 1) {
        songIndex.num = 0;
      }
      loadSong(songs[songIndex.num]);
      player.current.play();
    }
    progressBar.current.value = player.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const adjustVolume = () => {
    player.current.volume = volumeSlider.current.value;
    setCurrentVolume(volumeSlider.current.value);
  };

  const changeRange = () => {
    player.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  if (!props.currentPlaylist) {
    return null;
  } else {
    return (
      <div className='player-wrapper flex-row-between'>
        <audio
          autoPlay={isAutoPlay}
          ref={player}
          src={props.currentPlaylist ? props.currentPlaylist[0].audioUrl : ''}
        />

        <div className='flex-row-start vertical-center player-side player-left'>
          <div className='player-cover'>
            <img src={cover} />
          </div>
          <div className='player-info'>
            <p className='player-title'>{title}</p>
            <p className='player-artist'>{artist}</p>
            <p className='player-playlist'>
              <span className='bold'>Playing From:</span> {playlistTitle}
            </p>
          </div>
        </div>

        <div className='flex-col-center player-center'>
          <div className='flex-row-center player-controls'>
            <button className='player-btn' onClick={prevSong}>
              <i className='fas fa-step-backward'></i>
            </button>
            <button className='player-btn' onClick={togglePlayPause}>
              <i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i>
            </button>
            <button className='player-btn' onClick={nextSong}>
              <i className='fas fa-step-forward'></i>
            </button>
          </div>
          <div className='flex-row-center vertical-center player-seek'>
            <div className='player-time'>{convertDuration(currentTime)}</div>
            <div>
              <input
                type='range'
                className='progressBar'
                defaultValue={0}
                ref={progressBar}
                onChange={changeRange}
              />
            </div>
            <div className='player-time'>
              {duration && !isNaN(duration)
                ? convertDuration(duration)
                : '0:00'}
            </div>
          </div>
        </div>

        <div className='flex-row-end vertical-center player-side player-right'>
          <button>
            <HiVolumeUp />
          </button>
          <input
            type='range'
            min='0'
            max='1'
            step='0.02'
            defaultValue={currentVolume}
            onChange={adjustVolume}
            ref={volumeSlider}
            className='volumeSlider'
          />
        </div>
      </div>
    );
  }
};
