Rails.application.routes.draw do

  devise_for :users
  get 'welcome/home'
  get '/app', to: 'welcome#app', as: 'app'
  
  root 'welcome#home'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
