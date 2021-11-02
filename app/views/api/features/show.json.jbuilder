json.set! 'songList' do
  json.array! @tracks do |track|
    json.id track.id
    json.title track.title
    json.artistId @artist.id
    json.artist @artist.artist_name
    json.albumId @album.id
    json.album @album.title
    json.audioUrl url_for(track.audiofile)
    json.cover url_for(@album.cover)
    json.playlistTitle @album.title
    json.sourceType 'albums'
    json.sourceId @album.id
  end
end