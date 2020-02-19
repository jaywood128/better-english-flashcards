export function fetchFlashcardSets(){
  return (dispatch) => {
    dispatch({ type: 'LOADING_FLASHCARDSETS_LOADING'})
  
  return fetch('/api/v1/flashcard_sets')
      .then(resp => resp.json())
      .then(flashcard_sets => dispatch({ type: 'FETCH_LAST_THIRTY_DAYS', flashcard_sets }))
      .catch(error => console.log(error))
    }
}