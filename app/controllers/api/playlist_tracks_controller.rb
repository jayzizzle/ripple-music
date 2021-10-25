class Api::PlaylistTracksController < ApplicationController

  before_action :underscore_params!

  def show
    @playlist_track = PlaylistTrack.find_by(id: params[:id])
    render :show
  end

  def create
    @playlist_track = PlaylistTrack.new(playlist_track_params)
    if @playlist_track.save!
      render :show
    else
      render json: @playlist_track.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_track = PlaylistTrack.find_by(id: params[:id])
    if @playlist_track.destroy
      render :show
    else
      render json: ['Track does not exist'], status: 404
    end
  end

  private
  def playlist_track_params
    params.require(:playlist_track).permit(:playlist_id, :track_id)
  end

end
