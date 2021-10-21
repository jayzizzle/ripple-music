class Api::FollowsController < ApplicationController

  before_action :underscore_params!

  def index
    @artists_followed = current_user.artists_followed.with_attached_photo
    @follows = current_user.follows
    render :index
  end

  def show
    @follow = Follow.find_by(id: params[:id])
    if @follow
      render :show
    else
      render json: ['Follow does not exist'], status: 404
    end
  end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(id: params[:id])
    if @follow.destroy
      render :show
    else
      render json: ['Follow does not exist'], status: 404
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:user_id, :artist_id)
  end

end
