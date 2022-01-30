
import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCSVcsVMtYBpk8MUDecEmkcUH7QRfpR48E",
  authDomain: "superchat-a53f7.firebaseapp.com",
  projectId: "superchat-a53f7",
  storageBucket: "superchat-a53f7.appspot.com",
  messagingSenderId: "76730308952",
  appId: "1:76730308952:web:0d56412ac3a0d36954ed2d",
  measurementId: "G-0MHRKEQ2JS"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();



function App() {
  // const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <section>
        {/* {user ? <ChatRoom /> : <SignIn />} */}
      </section>

    </div>
  );
}

function SignIn(){
  <button>Sign in with Google</button>
}

function SignOut(){
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}
function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

    </main>
    </>
    )
}


function ChatMessage(props) {
  const { text, uid } = props.message;
  return <p>{text}</p>
}





export default App;
