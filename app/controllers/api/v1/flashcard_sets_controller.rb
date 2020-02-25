require 'pry'
module Api 
  module V1
    class FlashcardSetsController < ApplicationController

      def new
      end 

      def index 

        if user_signed_in? 
          if flashcard_sets = current_user.flashcard_sets.all
            render json: @flashcard_set, status: 200
          else 
            render json: flashcard_sets.each(error => console.log(error)), status: 400
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
