class Api::ArtistsController < ApplicationController

  before_action :underscore_params!

  def index
    @artists = Artist.with_attached_photo.all
    render :index
  end

  def show
    @artist = Artist.with_attached_photo.find_by(id: params[:id])
    if @artist
      @albums = @artist.albums.with_attached_cover
      render :show
    else
      render json: ['Artist does not exist.'], status: 404
    end
  end

  def artist_params
    params.require(:artist).permit(:artist_name, :bio, :photo)
  end
end