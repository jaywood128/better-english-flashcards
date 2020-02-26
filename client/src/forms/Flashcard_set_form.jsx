import React from 'react'
import { connect } from 'react-redux';
import { createFlashcardSet } from '../actions/createFlashcardSet';
class FlashcardSetForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {title: "", description: ""}

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }


  handleOnSubmit = (event) => {
    event.preventDefault()
    
    this.props.createFlashcardSet(this.state.title, this.state.description)
   
  }


  render (){
    return (
    <div className="flashcard-set-form-container">
      <h2> Create a new set of flashcards</h2>
      <form onSubmit={this.handleOnSubmit}>
        
       <label> Title: </label> <input type="text" value={this.state.title} onChange={event => this.setState({title: event.target.value})}/>
        <label>Description: </label> <input type="text" value={this.state.description} onChange={event => this.setState({description: event.target.value})}/>
        <button type="submit">Submit</button>
      </form> 
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createFlashcardSet: ()=> dispatch(createFlashcardSet())
})

// const mapStateToProps = (state) => {
//   return {}
// }

export default connect(null, mapDispatchToProps)(FlashcardSetForm)


