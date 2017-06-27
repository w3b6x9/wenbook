class Friendship < ApplicationRecord
  validates_uniqueness_of :sender, scope: :receiver
  validate :friendship_cannot_be_duplicated, on: :create
  validate :friendship_cannot_be_with_self, on: :create

  belongs_to :sender,
    class_name: "User",
    foreign_key: :sender_id

  belongs_to :receiver,
    class_name: "User",
    foreign_key: :receiver_id

  enum status: {
    pending: 0,
    confirmed: 1,
    denied: 2,
    deleted: 3,
  }

  private

  def friendship_cannot_be_duplicated
    if Friendship.where("sender_id = ? AND receiver_id = ?",
      sender.id, receiver.id).exists? || Friendship.where(
        "sender_id = ? AND receiver_id = ?", receiver.id, sender.id).exists?
      errors.add(:friendship, "can't be duplicated")
    end
  end

  def friendship_cannot_be_with_self
    if sender.id == receiver.id
      errors.add(:friendship, "can't be with self")
    end
  end
end
