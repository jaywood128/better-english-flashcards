import React, { Component }               from 'react'
import { Link }                           from 'react-router-dom'
import { fetchFlashcardSets } from '../actions/fetchFlashcardSets';
import { connect } from 'react-redux';

class FlashcardSetsContainer extends Component {

  state = {
    FlashcardSets: []
  }

  componentDidMount() {
    this.props.fetchFlashcardSets()
  }

  renderFlashcardSets = () => {
    return this.props.FlashcardSets.map(FlashcardSet => {
      return <FlashcardSet title={FlashcardSet.title} description={FlashcardSet.description} /> 
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

const mapDispatchToProps = dispatch => ({
  fetchFlashcardSets: ()=> dispatch(fetchFlashcardSets())
})

const mapStateToProps = (state) => {
  return {FlashcardSets: state.FlashcardSets }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardSetsContainer) 