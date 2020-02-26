require 'pry'
module Api 
  module V1
    class FlashcardSetsController < ApplicationController

      def new
      end 

      def create 
       binding.pry
        if user_signed_in?
          @flashcard_set = current_user.flashcard_sets.build(title: params[:title], description: params[:description])
          if @flashcard_set.save 
            render json: @flashcard_set, status: 200 
          else 
            render json: flashcard_sets.each do |flashcard |
              flashcard.error
            end  
          end 
        else 
          redirect_to devise_user_sign_in_path 
        end 
      end 

      def index 

        if user_signed_in? 
         
          if flashcard_sets = current_user.flashcard_sets.all
            render json: @flashcard_sets, status: 200
          else 
            render json: flashcard_sets.each do |flashcard |
                            flashcard.error
                          end 
          end
        else 
          render json: {}, status: 401
        end 

      end 

      def show 
      end 

      def edit 
      end 

      def update
      end 

      def delete 
      end 

      private 

      def flashcard_set_params
        binding.pry
        params.require(:flashcard_sets).permit(:title, :descripton)
      end

    end
  end
end
