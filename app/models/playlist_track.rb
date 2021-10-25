class PlaylistTrack < ApplicationRecord

  validates :playlist_id, :track_id, presence: true
  validates :playlist_id, uniqueness: { scope: :track_id }

  belongs_to :playlist,
    foreign_key: :playlist_id,
    class_name: 'Playlist'

  belongs_to :track,
    foreign_key: :track_id,
    class_name: 'Track'

end
