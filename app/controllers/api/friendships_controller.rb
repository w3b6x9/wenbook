class Api::FriendshipsController < ApplicationController
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

  def friends
    @user = User.find(params[:id])
    @friendships = @user.confirmed_friendships
    render :friends
  end

  def sent_requests
    @sent_requests = current_user.pending_sent_friendships
  end

  def create_friendship
    @friendship = Friendship.new(friendship_params)
    @friendship.sender = current_user

    if @friendship.save
      render :sent_request
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  private

  def friendship_params
    params.require(:friendship).permit(:status, :receiver_id)
  end
end
