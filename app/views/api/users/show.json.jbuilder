json.extract! @user, :id, :username

json.set! 'followedArtists' do
  @user.follows.each do |follow|
    json.set! follow.id, follow.artist_id
  end
end

json.set! 'likedAlbums' do
  @user.album_likes.each do |like|
    json.set! like.id, like.album_id
  end
end

json.set! 'likedTracks' do
  @user.track_likes.each do |like|
    json.set! like.id, like.track_id
  end
end

json.set! 'playlists' do
  @user.playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :id, :title, :user_id
    end
  end
end