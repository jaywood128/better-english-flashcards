export default (state = { myFlashcardSets: [] }, action) => {
  switch(action.type) {
    case'LOADING_FLASHCARD_SETS' :
      return {...state, 
        myFlashcardSets: action.flashcardSet } 

        default: 
        return state;
  
  }
}