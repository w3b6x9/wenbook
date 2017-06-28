Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:index, :create, :update, :destroy]
    resources :posts, only: [:create, :update]
    get "users/:id/friends", to: "friendships#friends", as: :friends
  end
end
