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