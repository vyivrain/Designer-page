Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'
  get '/my-auth', to: 'auth#my_auth', as: :auth
  resources :projects, except: [:show]
  resources :images, except: [:update, :edit]
  resources :groups, path: '/portfolio'
  resources :contacts, only: [:index]
  resources :prices, only: [:index]
  resources :about_us, only: [:index]

  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index]
      resources :project_images, only: [:index]
      resources :groups, only: [:index]
    end
  end
end
