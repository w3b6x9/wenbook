class Friendship < ApplicationRecord
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
end
