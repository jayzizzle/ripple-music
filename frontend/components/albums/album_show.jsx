import React, { useEffect } from 'react';
import AlbumHeartContainer from '../heart_button/album_heart_container';
import { TrackItem } from '../tracks/track_item';
import { Link } from 'react-router-dom';
import { TrackLabels } from '../tracks/track_labels';

export const AlbumShow = (props) => {
  let songList;

  useEffect(() => {
    props.getAlbum(props.match.params.albumId);
  }, []);

  if (!props.album || !props.artist) {
    return null;
  } else {
    songList = props.tracks.map((track) => ({
      id: track.id,
      title: track.title,
      artistId: props.artist.id,
      artist: props.artist.artistName,
      albumId: props.album.id,
      album: props.album.title,
      audioUrl: track.audioUrl,
      cover: props.album.coverUrl,
      playlistTitle: props.album.title,
    }));
  }

  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <div className='flex-row-start'>
          <img className='cover-lg' src={props.album.coverUrl} />
          <div className='album-show-details'>
            <h1>{props.album.title}</h1>
            <Link
              className='hover-line lightgray-white'
              to={`../../../artists/${props.artist.id}`}
            >
              <h3 className='vertical-text-separation'>
                {props.artist.artistName}
              </h3>
            </Link>
            <p className='album-sm-caps'>
              {props.album.year}&nbsp;
              {props.album.isExplicit ? (
                <span className='explicit'>Explicit</span>
              ) : null}
            </p>
            <AlbumHeartContainer
              itemId={props.album.id}
              hearts={props.likedAlbums}
              itemKey='albumId'
              classStyle='albumId'
            />
          </div>
        </div>
        <TrackLabels />
        {props.tracks.map((track) => (
          <TrackItem
            track={track}
            artist={props.artist}
            album={props.album}
            itemId={track.id}
            hearts={props.likedTracks}
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
