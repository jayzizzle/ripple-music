class Api::FeaturesController < ApplicationController

  def index
    @albums = Album.all.with_attached_cover.includes(:artist).where.not(category: ['mix']).limit(3).order('RANDOM()')
    @artists = Artist.with_attached_photo.limit(3).order('RANDOM()')
    render :index
  end

end