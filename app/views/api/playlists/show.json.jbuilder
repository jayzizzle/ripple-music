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
    end
  end
end