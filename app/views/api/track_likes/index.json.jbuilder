json.set! 'tracks' do
  @tracks_liked.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :artist_id, :album_id, :num, :seconds, :is_interlude
      json.artistName track.artist.artist_name
      json.albumTitle track.album.title
      json.albumId track.album.id
      json.audioUrl url_for(track.audiofile)
      json.coverUrl url_for(track.album.cover) # N+1 QUERY!!!
    end
  end
end

json.set! 'likedTracks' do
  @likes.each do |like|
    json.set! like.id do
      json.extract! like, :id, :track_id
    end
  end
end