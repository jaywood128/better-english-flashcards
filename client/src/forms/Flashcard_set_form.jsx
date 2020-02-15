import React from 'react'

class FlashcardSetForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {title: "", description: ""}

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    // this.props.createFlashCardSet(this.state.title, this.state.description)
    this.setState({
      title: "",
      description: ""
    })
  }


  render (){
    return (
    <div className="flashcard-set-form-container">
      <form onSubmit={this.handleOnSubmit}>
        
       <label> Title: </label> <input type="text" value={this.state.title} onChange={event => this.setState({title: event.target.value})}/>
        <label>Description: </label> <input type="text" value={this.state.description} onChange={event => this.setState({description: event.target.value})}/>
      </form> 
    </div>
    )
  }
}

export default FlashcardSetForm