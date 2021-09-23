import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = (props) => {
    console.log(props.ChatEngine);
    return(
    <ChatEngine 
        height="100vh"
        projectID="bc57caf5-ea22-474c-a975-e08212a11d31"
        userName="TheProcessor"
        userSecret="Dave123"
        renderChatFeed = { (chatAppState) => <ChatFeed {...chatAppState} /> }
    />
    );
}

export default App;