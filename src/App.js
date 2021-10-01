import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

// Dave123, Bot123
const App = (props) => {
    console.log(props.ChatEngine);

    if(!localStorage.getItem('username')) return <LoginForm />;

    return(
    <ChatEngine 
        height="100vh"
        projectID="bc57caf5-ea22-474c-a975-e08212a11d31"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed = { (chatAppState) => <ChatFeed {...chatAppState} /> }
    />
    );
}

export default App;