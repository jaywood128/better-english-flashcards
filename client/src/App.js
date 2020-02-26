import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlashcardSetForm from './forms/Flashcard_set_form'
import FlashcardSetContainer from './containers/FlashcardSetContainer'
import FlashcardSet from './components/FlashcardSet'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
function App() {
  return (
  <Router> 
    <Switch>
      <Route path="/flashcard_set/new" component={FlashcardSetForm}></Route>
    <div className="App">
      <header className="App-header">
        <FlashcardSetContainer/>
        <FlashcardSetForm/> 
      </header>
    </div>
    </Switch>
  </Router>
  );
}

export default App;
