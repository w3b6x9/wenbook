json.set! @friendship.id do
  json.request_id @friendship.id
  json.receiver_id @friendship.receiver.id
  json.first_name @friendship.receiver.first_name
  json.last_name @friendship.receiver.last_name
  json.profile_picture @friendship.receiver.profile_picture
end
