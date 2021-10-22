class Api::TracksController < ApplicationController

  before_action :underscore_params!

  def index
    @tracks = Track.all
    render :index
  end

  def show
    @track = Track.find_by(id: params[:id])
    if @track
      render :show
    else
      render json: @track.errors.full_messages, status: 404
    end
  end

end
