class CreateFlashcardSets < ActiveRecord::Migration[5.2]
  def change
    create_table :flashcard_sets do |t|
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
