@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :artist_name
    json.photoUrl url_for(artist.photo)
  end
end