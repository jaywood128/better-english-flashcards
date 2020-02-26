export function createFlashcardSet(newtitle, newdescription){
  
  let newFlashcardSet = { title: newtitle, description: newdescription }
  debugger 
  return (dispatch) => {
    dispatch({ type: 'LOADING_FLASHCARDSETS_LOADING'})
    let token = document.querySelector('meta[name="csrf-token"]').content;
  
  return fetch('/api/v1/flashcard_sets', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-CSRF-Token': token
    },
    redirect: "error",
    body: JSON.stringify(newFlashcardSet)
  },).then(resp => resp.json())
    .then(flashcard_set => {
        dispatch({ type: "FLASHCARD_SET_CREATED"})
      return dispatch({ type: 'CREATE_FLASHCARD_SET', payload: flashcard_set })
    })
    .catch(error => console.log(error))
    }
}