class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    @post.author = current_user

    if @post.save
      render :feed_item
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render json: {}
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def wallfeed
    @wall_feed_posts = User.find(params[:id]).try(:wall_feed_posts)
  end

  def newsfeed
    @news_feed_posts = User.find(params[:id]).try(:news_feed_posts)
  end

  private

  def post_params
    params.require(:post).permit(:receiver_id, :body)
  end
end
