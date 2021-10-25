json.set! 'playlist' do
  json.extract! @playlist, :id, :title, :user_id
end