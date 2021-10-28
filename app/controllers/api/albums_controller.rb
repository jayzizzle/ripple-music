class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all.with_attached_cover.includes(:artist)
    render :index
  end

  def show
    @album = Album.with_attached_cover.find_by(id: params[:id])
    if @album
      @artist = @album.artist
      @tracks = @album.tracks.with_attached_audiofile
      render :show
    else
      render json: ['Album does not exist.'], status: 404
    end
  end

  def album_params
    params.require(:album).permit(:title, :artist_id, :category, :year, :is_explicit, :cover)
  end
end
