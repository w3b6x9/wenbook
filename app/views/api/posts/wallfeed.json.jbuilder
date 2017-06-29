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
    post.comments.each do |comment|
      json.comments do
        json.set! comment.id do
          json.id comment.id
          json.commentable_id comment.commentable_id
          json.author_id comment.author.id
          json.author_first_name comment.author.first_name
          json.author_last_name comment.author.last_name
          json.author_profile_picture comment.author.profile_picture
          json.time_ago comment.time_ago
          json.body comment.body
        end
      end
    end
  end
end
