json.set! 'artist' do
  json.extract! @artist, :id, :artist_name
  json.photoUrl url_for(@artist.photo)
end