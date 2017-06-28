require 'action_view'
require 'action_view/helpers'

class Post < ApplicationRecord
  include ActionView::Helpers::DateHelper

  validates :author, :body, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  belongs_to :receiver,
    optional: true,
    class_name: 'User',
    foreign_key: :receiver_id

  def time_ago
    distance_of_time_in_words(self.created_at, Time.now)
  end
end
