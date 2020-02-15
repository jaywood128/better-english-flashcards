class AddFlashcardSetIdToFlashcard < ActiveRecord::Migration[5.2]
  def change
    add_column :flashcards, :flashcard_set_id, :integer 
  end
end
