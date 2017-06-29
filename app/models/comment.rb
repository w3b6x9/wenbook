require 'action_view'
require 'action_view/helpers'

class Comment < ApplicationRecord
  include ActionView::Helpers::DateHelper

  validates :author, :body, presence: true

  belongs_to :commentable, polymorphic: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  def time_ago
    time_ago_in_words(self.created_at)
  end
end
