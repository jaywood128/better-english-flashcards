export default (state = { myFlashcardSets: [] }, action) => {
 
  switch(action.type) {
    case'GET_FLASHCARD_SETS' :
      return {...state, 
        myFlashcardSets: action.flashcardSets } 

    case'CREATE_FLASHCARD_SET' :
        return {...state,
          myFlashcardSets: [
            ...state.myFlashcardSets, 
            action.payload             
            ]
        }

        default: 
        return state;
  
  }
}