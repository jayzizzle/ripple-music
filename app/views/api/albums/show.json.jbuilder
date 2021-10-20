json.extract! @album, :id, :title, :artist_id, :category, :year, :is_explicit
json.artistName @album.artist.artist_name

# json.artistPhotoUrl url_for(@album.artist.photo)
# json.coverUrl url_for(@album.cover)
# json.set! 'tracks' do
#   @album.tracks.each do |track|
#     json.set! track.num do
#       json.extract! track, :id, :title, :num, :seconds, :artist_id, :album_id
#     end 
#   end
# end