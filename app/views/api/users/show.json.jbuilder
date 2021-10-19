json.extract! @user, :id, :username

json.set! 'followedArtists' do
  @follows.each do |follow|
    json.set! follow.id, follow.artist_id
  end
end