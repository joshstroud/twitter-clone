import React, { Component } from 'react';
import '../../App.css';

import ChatSidebar from './sidebar/ChatSidebar';
import ChatMessagesContainer from './messages/ChatMessagesContainer';


class ShowChat extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedChatId: null };

        this.handleChatSelect = this.handleChatSelect.bind(this);
    }

    handleChatSelect(chatId) {

        // console.log(`chat id ${chatId} selected`);
        this.setState({
            selectedChatId: chatId
        });
    }

    render() {
        return (
        <div className="main">
            <ChatSidebar
                selectedChatId={this.state.selectedChatId} 
                onChatSelected={this.handleChatSelect} />
            <ChatMessagesContainer selectedChatId={this.state.selectedChatId}/>
        </div>
        )
    }
}

export default ShowChat;