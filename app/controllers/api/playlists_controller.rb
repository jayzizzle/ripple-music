class Api::PlaylistsController < ApplicationController

  before_action :underscore_params!

  def index
    @playlists = current_user.playlists.includes(:tracks)
    render :index
  end

  def show
    @playlist = Playlist.includes(:tracks).find_by(id: params[:id])
    if @playlist
      @tracks = @playlist.tracks.with_attached_audiofile.includes(:album, :artist)
      @playlist_tracks = PlaylistTrack.where(playlist_id: params[:id])
      render :show
    else
      render json: ['Playlist is empty or does not exist'], status: 404
    end
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      @tracks = []
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    @playlist = Playlist.find_by(id: params[:id])
    if @playlist && @playlist.update(playlist_params)
      @tracks = @playlist.tracks.includes(:album, :artist)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find_by(id: params[:id])
    if @playlist.destroy
      @tracks = []
      render :show
    else
      render json: ['Playlist does not exist'], status: 404
    end
  end

  private
  def playlist_params
    params.require(:playlist).permit(:title, :user_id)
  end

end
