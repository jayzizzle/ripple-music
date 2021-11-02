Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do

    resources :users, only: [:create, :show] do 
      resources :follows, only: [:create, :destroy, :index, :show]
      resources :album_likes, only: [:create, :destroy, :show, :index]
      resources :track_likes, only: [:create, :destroy, :show, :index]
    end
    
    resource :session, only: [:create, :destroy]

    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :tracks, only: [:index, :show]
    resources :playlists, only: [:index, :create, :show, :update, :destroy]
    resources :playlist_tracks, only: [:create, :destroy, :show]
    resources :features, only: [:index, :show]

  end

end
