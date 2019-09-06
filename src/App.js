import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

var firebaseConfig = {
  apiKey: "AIzaSyA7gxsmI_tdMXWZJ2fcQS6PU1TMUUXe3c8",
  authDomain: "labnotes003.firebaseapp.com",
  databaseURL: "https://labnotes003.firebaseio.com",
  projectId: "labnotes003",
  storageBucket: "",
  messagingSenderId: "627924486465",
  appId: "1:627924486465:web:4734440d94f5f5e09d79c0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




class App extends Component {
  constructor(){
    super()
    this.state= {
      isSignedIn : false
    }
  }


  uiConfig = {
    signInFlow:'',
        signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
   
    callbacks: {    // Privacy policy url/callback.
   signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged( user => {
      this.setState({isSignedIn : !!user})
      console.log('user', user);
    }) 
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to weed notes</h2>
        </div>

        <div>
          {this.state.isSignedIn ? (
          <div>
            <div>Signed In!</div> 
            <button onClick={()=> firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile_picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </div>
          ) : (
            <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            />
          )}
      </div>
    </div>
    );
  }
}

export default App;