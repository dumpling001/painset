Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :pains do
    member do
      post :mark
      post :discard
    end
    resources :comments
  end

  namespace :account do
    resources :pains
    resources :comments
  end

  root 'welcome#index'
end
