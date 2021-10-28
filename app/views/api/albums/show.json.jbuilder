json.set! 'album' do
  json.extract! @album, :id, :title, :artist_id, :category, :year, :is_explicit
  json.coverUrl url_for(@album.cover)
end

json.set! 'artist' do
  json.set! @artist.id do
    json.id @artist.id
    json.artistName @artist.artist_name
    json.photoUrl url_for(@artist.photo)
  end
end

json.set! 'tracks' do
  @tracks.each do |track|
    json.set! track.num do
      json.extract! track, :id, :title, :num, :seconds, :artist_id, :album_id
      json.audioUrl url_for(track.audiofile)
    end 
  end
end