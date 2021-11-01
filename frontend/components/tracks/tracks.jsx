import React, { useEffect } from 'react';
import { TrackLabels } from './track_labels';
import { TrackItem } from './track_item';
import { FaPlay } from 'react-icons/fa';
import { ImShuffle } from 'react-icons/im';
import { shuffle } from '../../util/helper_util';

export const Tracks = (props) => {
  let songList;

  useEffect(() => {
    props.getAllTrackLikes(props.userId);
  }, []);

  if (!props.likedTracks) {
    return null;
  } else {
    songList = props.likedTracks.map((track) => ({
      id: track.id,
      title: track.title,
      artistId: track.artistId,
      artist: track.artistName,
      albumId: track.albumId,
      album: track.albumTitle,
      audioUrl: track.audioUrl,
      cover: track.coverUrl, // FIX N+1
      playlistTitle: 'My Tracks',
    }));
  }

  const playSong = () => {
    props.receivedNewPlaylist(songList);
    props.setToPlay({ isPlaying: true });
  };

  const shuffleSongs = () => {
    songList = shuffle(songList);
    playSong();
  };

  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <h1 className='section-title'>My Tracks</h1>
        <div className='flex-row-start'>
          <button className='lg-play-btn' onClick={() => playSong()}>
            <FaPlay />
            &nbsp;<span className='lg-button-text'>Play</span>
          </button>
          <button className='lg-shuffle-btn' onClick={() => shuffleSongs()}>
            <ImShuffle />
            &nbsp;<span className='lg-button-text'>Shuffle</span>
          </button>
        </div>
        <TrackLabels />
        {props.likedTracks.map((track, i) => (
          <TrackItem
            num={i + 1}
            track={track}
            artist={{ id: track.artistId, artistName: track.artistName }}
            album={{ id: track.albumId, title: track.albumTitle }}
            itemId={track.id}
            hearts={props.likes}
            itemKey='trackId'
            classStyle='trackId'
            key={track.id}
            userId={props.userId}
            playlists={props.playlists}
            postPlaylistTrack={props.postPlaylistTrack}
            addedSingleTracklist={props.addedSingleTracklist}
            receivedNewPlaylist={props.receivedNewPlaylist}
            setToPlay={props.setToPlay}
            songList={songList}
          />
        ))}
      </main>
    </div>
  );
};
