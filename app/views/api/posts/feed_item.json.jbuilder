json.set! @post.id do
  json.id @post.id
  json.author_id @post.author_id
  json.receiver_id @post.receiver_id
  json.author_first_name @post.author.first_name
  json.author_last_name @post.author.last_name
  json.author_profile_picture @post.author.profile_picture
  json.body @post.body
  json.time_ago @post.time_ago
end
