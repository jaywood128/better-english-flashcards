import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlashcardSetForm from './forms/Flashcard_set_form'
import FlashcardSetContainer from './containers/FlashcardSetContainer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FlashcardSetContainer/>
      </header>
    </div>

  );
}

export default App;
