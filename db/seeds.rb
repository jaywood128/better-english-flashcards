# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@user = User.first || User.create(email: 'test2@gmail.com', password: '123456', password_confirmation: '123456')

@flash_card_set = @user.flashcard_sets.create(title: "React.js", description: "Essential React concepts")

@flash_card_set.flashcards.create(term: "state", definition: "How data is stored and updated in React")

@first_flashcard.flashcard_set_id = @flashcard_set.id 

@first_flashcard.save

