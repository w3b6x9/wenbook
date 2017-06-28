@wall_feed_posts.each do |post|
  author = post.author

  json.set! post.id do
    json.id post.id
    json.author_id post.author_id
    json.receiver_id post.receiver_id
    json.author_first_name author.first_name
    json.author_last_name author.last_name
    json.author_profile_picture author.profile_picture
    json.body post.body
    json.time_ago post.time_ago
  end
end
