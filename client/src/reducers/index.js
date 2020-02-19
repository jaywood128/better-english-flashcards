import  FlashcardSetReducer  from './FlashcardSetReducer'
// import FlashcardReducer from '.FlashcardReducer'
import { combineReducers } from "redux";

  const rootReducer = combineReducers({
    flashcardsets: FlashcardSetReducer,
    // flashcards: FlashcardReducer
  });

export default rootReducer