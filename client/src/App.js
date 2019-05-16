import React, {Component} from 'react';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Homepage from './Homepage';
import Video from './Video'

firebase.initializeApp({
    apiKey: "AIzaSyCzPE45arOuwNVUB0v0ehAviu-4KpE7Wv4",
    authDomain: "wwtf-1556214015206.firebaseapp.com"
  })

class App extends Component {
    state = {
        isSignedIn: false,
    }

    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }

    componentDidMount = () => {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        console.log("user", user)
      })
    }


    render() {
        return (
          <div className="App">
            <Video />
            {this.state.isSignedIn ? (

                <Homepage/>

            ) : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          </div>
        )
    }
}


export default App;