export function createFlashcardSet(){
  debugger 
  return (dispatch) => {
    dispatch({ type: 'LOADING_FLASHCARDSETS_LOADING'})
  
  return fetch('/api/v1/flashcard_sets')
      .then(resp => resp.json())
      .then(flashcard_set => dispatch({ type: 'CREATE_FLASHCARD_SET', flashcard_set }))
      .catch(error => console.log(error))
    }
}