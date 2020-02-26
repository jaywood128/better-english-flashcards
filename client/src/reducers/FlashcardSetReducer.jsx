export default (state = { myFlashcardSets: [] }, action) => {
  debugger
  switch(action.type) {
    case'GET_FLASHCARD_SETS' :
      return {...state, 
        myFlashcardSets: action.flashcardSets } 

    case'CREATE_FLASHCARD_SET' :
        return {...state,
          myFlashcardSets: [
            ...state.myFlashcardSets, 
            {
              title: action.title, 
              description: action.description   
            }
                         
            ]
        }

        default: 
        return state;
  
  }
}