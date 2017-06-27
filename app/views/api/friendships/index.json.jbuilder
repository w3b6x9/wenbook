current_user.pending_received_friendships.each do |friendship|
  json.set! friendship.id do
    json.friendship_id friendship.id
    json.id friendship.sender.id
    json.first_name friendship.sender.first_name
    json.last_name friendship.sender.last_name
    json.profile_picture friendship.sender.profile_picture
  end
end
