class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :password_digest, :session_token, presence: true
  validates :first_name, :last_name, presence: true,
            length: { maximum: 50 }
  validates :email, presence: true, length: { maximum: 255 },
            uniqueness: { case_sensitive: false },
            format: { with: VALID_EMAIL_REGEX }
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :birth_year, presence: true, inclusion: { in: 1905..2017 }
  validates :birth_month, presence: true, inclusion: { in: 1..12 }
  validates :birth_day, presence: true, inclusion: { in: 1..31 }
  validates :gender, presence: true, inclusion: { in: %w(Female Male) }

  has_attached_file :profile_picture
  validates_attachment_content_type :profile_picture, content_type: /\Aimage\/.*\z/

  has_attached_file :cover_picture
  validates_attachment_content_type :cover_picture, content_type: /\Aimage\/.*\z/

  has_many :confirmed_received_friendships,
    -> { where(status: :confirmed) },
    class_name: :Friendship,
    foreign_key: :receiver_id

  has_many :pending_received_friendships,
    -> { where(status: :pending) },
    class_name: :Friendship,
    foreign_key: :receiver_id

  has_many :confirmed_sent_friendships,
    -> { where(status: :confirmed) },
    class_name: :Friendship,
    foreign_key: :sender_id

  has_many :pending_sent_friendships,
    -> { where(status: :pending) },
    class_name: :Friendship,
    foreign_key: :sender_id

  has_many :denied_sent_friendships,
    -> { where(status: :denied) },
    class_name: :Friendship,
    foreign_key: :sender_id

  has_many :wall_feed_posts,
    -> { order(created_at: :desc) },
    class_name: :Post,
    foreign_key: :receiver_id

  has_many :authored_posts,
    class_name: :Post,
    foreign_key: :author_id

  has_many :comments,
    class_name: :Comment,
    foreign_key: :author_id

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def confirmed_friendships
    confirmed_received_friendships + confirmed_sent_friendships
  end

  def news_feed_posts
    user_ids = Friendship
      .where("(sender_id = ? AND status = 1) OR (receiver_id = ? AND status = 1)",
        self.id, self.id)
      .pluck(:sender_id, :receiver_id)
      .flatten
      .uniq

    Post.where(author_id: user_ids).where(receiver_id: nil)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def generate_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_token
  end
end
