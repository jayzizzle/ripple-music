class AlbumLike < ApplicationRecord
  validates :user_id, :album_id, presence: true
  validates :user_id, uniqueness: { scope: :album_id }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :album,
    foreign_key: :album_id,
    class_name: 'Album'
end
