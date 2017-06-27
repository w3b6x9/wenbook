class Api::FriendshipsController < ApplicationController
  def index
    @friendships = Friendship.all
  end

  def create
    @friendship = Friendship.new(
      sender_id: current_user.id,
      receiver_id: params[:friendship][:receiver_id],
      status: params[:friendship][:status]
    )

    if @friendship.save
      render :index
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def update
    @friendship = Friendship.find(params[:id])

    if @friendship.update(friendship_params)
      render :index
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private

  def friendship_params
    params.require(:friendship).permit(:status)
  end
end
