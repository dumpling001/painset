Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :pains do
    resources :comments
  end
  
  root 'welcome#index'
end
