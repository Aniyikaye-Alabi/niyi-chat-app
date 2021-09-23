import React from 'react';
// import MessageForm from './MessageForm';
// import MyMessage from './MyMessage';
// import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    //console.log(props)
    const {chats, activeChat, userName, messages} = props;
    const chat = chats && chats[activeChat];
    console.log(chat, activeChat, userName, messages);

    const renderMessages = () => {
        const keys = Object.keys(messages);
        console.log(keys)

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index -1];
            const isMyMessage = userName === message.sender.username

        })
    }

    renderMessages();

    return(
        <div>
            ChatFeed
        </div>
    )
};

export default ChatFeed;