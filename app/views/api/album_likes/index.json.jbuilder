json.set! 'albums' do
  @albums_liked.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title, :artist_id, :category, :year, :is_explicit
      json.artistName album.artist.artist_name
      json.coverUrl url_for(album.cover)
    end
  end
end

json.set! 'likedAlbums' do
  @likes.each do |like|
    json.set! like.id do
      json.extract! like, :id, :album_id
    end
  end
end