@friendships.each do |friendship|
  if friendship.sender == @user
    user = friendship.receiver
  else
    user = friendship.sender
  end

  json.set! friendship.id do
    json.friendship_id friendship.id
    json.id user.id
    json.first_name user.first_name
    json.last_name user.last_name
    json.profile_picture user.profile_picture
  end
end
