class TrackLike < ApplicationRecord

  validates :user_id, :track_id, presence: true
  validates :user_id, uniqueness: { scope: :track_id }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :track,
    foreign_key: :track_id,
    class_name: 'Track'

  has_one :album,
    through: :track,
    source: :album

end
