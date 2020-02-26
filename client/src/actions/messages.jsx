export default (state = {success: false, failure: false, message: ''}, action) => {
  switch(action.type) {
    case 'FLASHCARD_SET_CREATED':
      return {...state, success: true, message: 'New flashcard-set created!'}
 
    default:
      return state
  }
}