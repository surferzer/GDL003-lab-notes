import React, { Component } from "react";
import './NoteForm.css';


class NoteForm extends Component{
    constructor(props){
        super(props)
        this.state={
            newNoteContent:'',
        };
        this.handleUserInput=this.handleUserInput.bind(this);
        this.writeNote=this.writeNote.bind(this);
    }


    //set the value when the user change the input box
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value,  //the value of the new note
        })
    }

    writeNote(){
   this.props.addNote(this.state.newNoteContent);
   //metodo to set the input value
   this.setState({
    newNoteContent:'',
 });
}

    render(){
        return(

            <div className="formWrapper">
            <input className="noteInput"
            placeholder="Write a new note..." 
            value={this.state.newNoteContent}
            onChange={this.handleUserInput} />
            <button className="noteButton"
            onClick={this.writeNote}> ADD NOTE </button>
            </div>
      )
    }
};

export default NoteForm;