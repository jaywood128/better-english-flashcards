class AddUserIdToFlashcardSet < ActiveRecord::Migration[5.2]
  def change
    add_column :flashcard_sets, :user_id, :integer
  end
end
