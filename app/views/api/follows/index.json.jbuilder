json.set! 'artists' do
  @artists_followed.each do |artist|
    json.set! artist.id do
      json.extract! artist, :id, :artist_name
      json.photoUrl url_for(artist.photo)
    end
  end
end

json.set! 'follows' do
  @follows.each do |follow|
    json.set! follow.id do
      json.extract! follow, :id, :artist_id
    end
  end
end