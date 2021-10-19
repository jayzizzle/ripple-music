class User < ApplicationRecord

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :album_likes,
    foreign_key: :user_id,
    class_name: 'AlbumLike'

  has_many :albums_liked,
    through: :album_likes,
    source: :album

  has_many :follows,
    foreign_key: :user_id,
    class_name: 'Follow'

  has_many :artists_followed,
    through: :follows,
    source: :artist

  has_many :playlists,
    foreign_key: :user_id,
    class_name: 'Playlist'

  has_many :track_likes,
    foreign_key: :user_id,
    class_name: 'TrackLike'

  has_many :tracks_liked,
    through: :track_likes,
    source: :track

  has_many :album_artists_liked,
    through: :albums_liked,
    source: :artist

  has_many :track_artists_liked,
    through: :tracks_liked,
    source: :artist

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end