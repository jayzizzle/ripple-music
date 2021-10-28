json.set! 'playlist' do
  json.extract! @playlist, :id, :title, :user_id
  json.numTracks @tracks.length
end

json.set! 'tracks' do
  @tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :seconds, :artist_id, :album_id
      json.artistName track.artist.artist_name
      json.albumTitle track.album.title
      json.audioUrl url_for(track.audiofile)
    end
  end
end

if !!@playlist_tracks
  json.set! 'tracks' do
    @playlist_tracks.each do |track|
      json.set! track.track_id do
        json.playlistTrackId track.id
      end
    end
  end
end