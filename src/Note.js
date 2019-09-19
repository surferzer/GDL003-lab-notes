import React, { Component } from 'react';
import './App.css';
import './Note.css';
//import PropTypes from 'prop-types';


class Note extends Component{
    constructor(props){
    super(props);
    this.noteContent=props.noteContent;
    this.noteId=props.noteId;
    this.handleRemoveNote=this.handleRemoveNote.bind(this);
}

handleRemoveNote(id){
    this.props.removeNote(id);

}

ChangeNote(id){
    this.props.changeNote(id);
}

UpdateData(noteContent){
    let newMsj= prompt(noteContent)
        if(newMsj.length>0){
            console.log(newMsj)
            return newMsj;
            
        }else{
            console.log("nota vacía");
        }
        
    }
    



render(props){
    return(
        <div className="note fade-in">
            <span className="closeBtn" 
            onClick={()=> this.handleRemoveNote(this.noteId)}>
            &times;
            </span>
            <p className="noteContent">{this.noteContent}</p>
            <button className="EditButton" 
            onClick={() => this.UpdateData(this.noteContent)}>"Edit"
            </button>
            </div>
        
    )
}
}
//Note.propTypes={
//    noteContent: PropTypes.string
//}


export default Note;    