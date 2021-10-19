json.extract! @user, :id, :username

json.set! 'followedArtists' do
  @user.follows.each do |follow|
    json.set! follow.id, follow.artist_id
  end
end