class Api::AlbumLikesController < ApplicationController

  before_action :underscore_params!

  def index
    @albums_liked = current_user.albums_liked.with_attached_cover.includes(:artist)
    @likes = current_user.album_likes
    render :index
  end

  def show
    @album_like = AlbumLike.find_by(id: params[:id])
    if @album_like
      render :show
    else
      render json: ['Like does not exist'], status: 404
    end
  end

  def create
    @album_like = AlbumLike.new(album_likes_params)
    if @album_like.save
      render :show
    else
      render json: @album_like.errors.full_messages, status: 422
    end
  end

  def destroy
    @album_like = AlbumLike.find_by(id: params[:id])
    if @album_like.destroy
      render :show
    else
      render json: ['Like does not exist'], status: 404
    end
  end

  private
  def album_likes_params
    params.require(:album_like).permit(:user_id, :album_id)
  end

end
