class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @post = Post.find(params[:post_id])

    if @post
      @comment = @post.comments.new(comment_params)
      @comment.author = current_user

      if @comment.save
        render :show
      else
        render json: @comment.errors.full_messages, status: 422
      end
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update(comment_params)
      render json: {}
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
