class Playlist < ApplicationRecord

  validates :title, :user_id, presence: true
  validates :user_id, uniqueness: { scope: :title }
  validates :title, length: { minimum: 2, maximum: 16 }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  has_many :playlist_tracks,
    foreign_key: :playlist_id,
    class_name: 'PlaylistTrack'

  has_many :artists,
    through: :playlist_tracks,
    source: :artist

  has_many :tracks,
    through: :playlist_tracks,
    source: :track

end
