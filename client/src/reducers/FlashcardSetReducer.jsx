export default (state = { myFlashcardSets: [] }, action) => {
  switch(action.type) {
    case'GET_FLASHCARD_SETS' :
      return {...state, 
        myFlashcardSets: action.flashcardSet } 

        default: 
        return state;
  
  }
}