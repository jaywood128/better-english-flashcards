class CreateFlashcards < ActiveRecord::Migration[5.2]
  def change
    create_table :flashcards do |t|
      t.string :term
      t.string :definition

      t.timestamps
    end
  end
end
