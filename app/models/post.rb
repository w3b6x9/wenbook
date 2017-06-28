class Post < ApplicationRecord
  validates :author, :body, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  belongs_to :receiver,
    optional: true,
    class_name: 'User',
    foreign_key: :receiver_id
end
