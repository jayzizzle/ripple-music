import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { convertDuration } from '../../../util/helper_util';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { linkToSource } from '../../../util/helper_jsx_util';

export const Player = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0.4);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const player = useRef();
  const volumeSlider = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  const songs = props.currentPlaylist;
  let currentTrackIndex = props.currentSongIndex;

  const [artist, setArtist] = useState('');
  const [artistId, setArtistId] = useState('');
  const [album, setAlbum] = useState('');
  const [albumId, setAlbumId] = useState('');
  const [title, setTitle] = useState('');
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [sourceType, setSourceType] = useState('');
  const [sourceId, setSourceId] = useState('');
  const [cover, setCover] = useState('');
  const [songUrl, setSongUrl] = useState('');

  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * 15) + 1;
    props
      .getFeaturedPlaylist(randomIndex)
      .then(() => props.setToReady({ isReady: true }));
  }, []);

  useEffect(() => {
    if (player.current) {
      player.current.volume = currentVolume;

      const seconds = Math.floor(player.current.duration);
      setDuration(seconds);
      progressBar.current.max = seconds;
    }
  }, [player?.current?.loadedmetadata, player?.current?.readyState]);

  useEffect(() => {
    if (player.current) {
      let currentSong = songs[currentTrackIndex];

      setArtist(currentSong.artist);
      setArtistId(currentSong.artistId);
      setAlbum(currentSong.album);
      setAlbumId(currentSong.albumId);
      setTitle(currentSong.title);
      setPlaylistTitle(currentSong.playlistTitle);
      setSourceType(currentSong.sourceType);
      setSourceId(currentSong.sourceId);
      setCover(currentSong.cover);
      setSongUrl(currentSong.audioUrl);
    }
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

  const toggleMute = () => {
    if (!isMuted) {
      player.current.volume = 0;
      setCurrentVolume(0);
      setIsMuted(true);
    } else {
      adjustVolume();
      setIsMuted(false);
    }
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
      currentTrackIndex--;
      if (currentTrackIndex < 0) {
        currentTrackIndex = songs.length - 1;
      }
      loadSong(songs[currentTrackIndex]);
      props.receivedCurrentTrack({ idx: currentTrackIndex });
      if (isPlaying) player.current.play();
    }
  };

  const nextSong = () => {
    currentTrackIndex++;
    if (currentTrackIndex > songs.length - 1) {
      currentTrackIndex = 0;
    }
    props.receivedCurrentTrack({ idx: currentTrackIndex });
    loadSong(songs[currentTrackIndex]);
    if (isPlaying) {
      player.current.play();
    } else {
      player.current.pause();
    }
  };

  const whilePlaying = () => {
    if (player.current.currentTime === player.current.duration) {
      currentTrackIndex++;
      if (currentTrackIndex > songs.length - 1) {
        currentTrackIndex = 0;
      }
      props.receivedCurrentTrack({ idx: currentTrackIndex });
      loadSong(songs[currentTrackIndex]);
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

  if (props.currentPlaylist.length === 0) {
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
            <Link to={`/artists/${artistId}/albums/${albumId}`}>
              <img src={cover} />
            </Link>
          </div>
          <div className='player-info'>
            <Link
              className='hover-line'
              to={`/artists/${artistId}/albums/${albumId}`}
            >
              <p className='player-title'>{title}</p>
            </Link>
            <Link className='hover-white' to={`/artists/${artistId}`}>
              <p className='player-artist'>{artist}</p>
            </Link>
            <p className='player-playlist'>
              <span className='bold'>Playing From</span>&nbsp;
              <Link
                className='hover-line lightgray-white'
                to={linkToSource(sourceType, artistId, sourceId)}
              >
                {playlistTitle}
              </Link>
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
          <button
            className={isMuted ? 'salmon mute-btn' : 'mute-btn hover-cyan'}
            onClick={() => toggleMute()}
          >
            {isMuted ? <HiVolumeOff /> : <HiVolumeUp />}
          </button>
          <input
            type='range'
            min='0'
            max='0.8'
            step='0.01'
            defaultValue={currentVolume}
            onChange={isMuted ? null : adjustVolume}
            ref={volumeSlider}
            className='volumeSlider'
          />
        </div>
      </div>
    );
  }
};
