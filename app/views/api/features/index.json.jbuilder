json.set! 'albums' do
  @albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title, :artist_id, :category, :year, :is_explicit
      json.artistName album.artist.artist_name
      json.coverUrl url_for(album.cover)
    end
  end
end

json.set! 'artists' do
  @artists.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :artist_name
      json.photoUrl url_for(artist.photo)
    end
  end
end