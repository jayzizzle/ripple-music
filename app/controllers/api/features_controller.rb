class Api::FeaturesController < ApplicationController

  def index
    @albums = Album.all.with_attached_cover.includes(:artist).where.not(category: ['mix']).limit(4).order('RANDOM()')
    @artists = Artist.with_attached_photo.limit(4).order('RANDOM()')
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

end