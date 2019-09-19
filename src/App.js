import React, { Component } from 'react';
import './App.css';
import Fire from './Fire';
import Note from './Note';
//import PropTypes from "prop-types";
import NoteForm from './NoteForm';
import {DB_CONFIG} from './Fire';
import 'firebase/database';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Card from 'react-bootstrap/Card'

import {UpdateData} from './Note';

class App extends Component {
 
constructor(props){
  super(props);

this.addNote=this.addNote.bind(this);
this.removeNote=this.removeNote.bind(this);
this.changeNote=this.changeNote.bind(this);

this.app=firebase.initializeApp(DB_CONFIG);
this.database=this.app.database().ref().child('notes')  
  //we are going to setup the React state of our component
  this.state={
    notes: [],
  }
}

componentWillMount(){
  const previousNotes=this.state.notes;
  //data snapshot
  this.database.on('child_added', snap=>{
  previousNotes.push({
    id:snap.key,
    noteContent: snap.val().noteContent,
  })

  this.setState({
    notes:previousNotes
    })
  })
  

this.database.on('child_removed', snap=>{
  for(let i=0; i<previousNotes.length; i++){
    if(previousNotes[i].id === snap.key){
      previousNotes.splice(i, 1);
  }
 }

this.setState({
  notes:previousNotes
  })
})

this.database.on('child_changed', snap=>{
  for(let i=0; i<previousNotes.length; i++){
    if(previousNotes[i].id === snap.key){
     
      previousNotes[i]=snap.val();
      console.log('EDITADO')
      
     
    }}
})

this.setState({
  notes:previousNotes
  })
}

addNote(note){
this.database.push().set({noteContent:note});
}

removeNote(noteId){
  this.database.child(noteId).remove();
}

changeNote(noteId){
  this.database.child(noteId).update({'noteContent': UpdateData()});
}

  render() {
    return (
      <view>
             <div className="App">
             <div className="App-header">
                <h1>¡My WORKOUT daily notes!</h1> 
             </div></div>
            
              <div>
                  <Fire />
                    </div>
                        
              <div className="notesWrapper">
              <div className="notesHeader">
              <div className="heading">This app is made to write about your trainning days, it will show you the progress in your body and mind</div>
              </div>
      
              <div className="notesBody">{
                
                  this.state.notes.map((note)=>{
              return(
                               
                <Note 
                noteContent={note.noteContent} 
                noteId={note.id} 
                key={note.id}
                date={note.date} 
                removeNote={this.removeNote}
                changeNote={this.changeNote} />
              )
            })
        }
              </div>
        
          <div className="notesFooter">
              <NoteForm  addNote={this.addNote} />
          </div>
        </div>
        </view>
    );
  }
}

 

export default App;