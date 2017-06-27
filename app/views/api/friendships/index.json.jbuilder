current_user.pending_received_friendships.each do |friendship|
  json.set! friendship.id do
    json.friendship_id friendship.id
    json.id friendship.sender.id
    json.first_name friendship.sender.first_name
    json.last_name friendship.sender.last_name
    json.profile_picture friendship.sender.profile_picture
  end
end

# json.confirmed_friendships do
#   json.array! current_user.confirmed_friendships do |friendship|
#     if current_user == friendship.sender
#       user = friendship.receiver
#     else
#       user = friendship.sender
#     end
#
#     json.id user.id
#     json.first_name user.first_name
#     json.last_name user.last_name
#     json.profile_picture user.profile_picture
#   end
# end
