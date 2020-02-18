// client/src/components/PostList.jsx
import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'

class FlashcardSetsContainer extends Component {

  state = {
    flashcardSets: []
  }

  componentDidMount() {
    fetch('/api/v1/flashcardsets')
      .then(flashcardSets => flashcardSets.json())
      .then(flashcardSets => {
        this.setState({
          flashcardSets: flashcardSets 
        })
      })
  }

  renderFlashcardSets = () => {
    return this.state.flashcardSets.map(flashcardSet => {
      return <FlashcardSet title={flashcardSet.title} description={flashcardSet.description} /> 
      } 
    )
  }

  render() {
    return (
      <div>
        Flashcard set list 
        {this.renderFlashcardSets()}
        <Link to="/flashcard_set/new">Make a new flashcard set</Link>
      </div>
    )
  }
}

export default FlashcardSetsContainer