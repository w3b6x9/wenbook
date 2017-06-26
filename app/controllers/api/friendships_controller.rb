class Api::FriendshipsController < ApplicationController
  def create
    @friendship = Friendship.new(
      sender_id: current_user.id,
      receiver_id: params[:receiver_id],
      status: params[:status]
    )

    if @friendship.save
      render json: {}
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @friendship = Friendship.find(params[:id])

    if @friendship.update(friendship_params)
      render json: {}
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private

  def friendship_params
    params.require(:friendship).permit(
      :sender_id,
      :receiver_id,
      :status
    )
  end
end
