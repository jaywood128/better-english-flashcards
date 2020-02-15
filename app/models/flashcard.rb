class Flashcard < ApplicationRecord
  belongs_to :flashcard_set 
  has_one_attached :image 
end
