@tracks.each do |track|
  json.set! track.id do
    json.extract! track, :id, :title, :artist_id, :album_id, :num, :seconds, :is_interlude
  end
end