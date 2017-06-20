class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :first_name, :last_name, presence: true,
            length: { minimum: 2, maximum: 50 }
  validates :email, presence: true, length: { maximum: 255 },
            uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :birth_year, inclusion: { in: 1905..2017 }, presence: true
  validates :birth_month, presence: true, inclusion: { in: 1..12 }
  validates :birth_day, presence: true, inclusion: { in: 1..31 }

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
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
