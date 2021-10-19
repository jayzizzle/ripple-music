class Follow < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'Artist'
end
