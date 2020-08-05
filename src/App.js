import React, {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import FlipMove from 'react-flip-move';
import Message from './Message';
import db from './firebase'
import firebase from 'firebase'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');

  //const [disabled,  setDisable] = useState(true)

  const [messages, setMessages] = useState([]);

  const [username, setUsername] = useState('');
    
     useEffect(()=>{
    //runs when the components loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot=> {
      setMessages(snapshot.docs.map(doc =>({id: doc.id, message:doc.data() }) ))
    }) 
  }, []) 
 

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [])
  
  const sendMessage = event =>{
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //all the messages goes here
    //input===''?setDisable(true):setDisable(false)
  
    // setMessages([...messages, {username: username, message: input}]);
    setInput([''])
    
  }

  console.log(messages)
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h6> Welcome {username}</h6>
      <form className="app__form">
            <FormControl className="app__formControl">
                
                  <Input className="app__input" 
                   placeholder="Enter a message..."
                   value={input} onChange={event => setInput(event.target.value)} />

                   <IconButton className="app__iconButton" disabled={!input}  variant="contained" color="primary" 
                  type="submit"  onClick={sendMessage} >
                     <SendIcon />
                     </IconButton>
            </FormControl>
             
      </form>
      <FlipMove>
          {
            messages.map(({message, id } )=> (
              <Message key={id} username={username} message={message} />
            ))
          }
      </FlipMove>
     
    </div>
  );
}

export default App;
