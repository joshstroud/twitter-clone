import React, { Component } from 'react';
import '../../../App.css';

import { API_URL } from '../../../constants'

import axios from 'axios';

import MessagesHeader from './MessagesHeader'
import Messages from './Messages'
import MessagesTextInput from './MessagesTextInput';

class ChatMessagesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            updateChat: false
        };

        this.handleChatUpdate = this.handleChatUpdate.bind(this);
    }

    componentDidMount() {
        // axios
        //     .get(`${API_URL}/chats/`)
        //     .then(res => {
        //         t
        //     })
    }

    handleChatUpdate(updateStatus) {
        console.log('settign chat update state to', updateStatus)
        this.setState({ updateChat: updateStatus });
    }

    render() {
        return (
        <div className="messages-container">
            <MessagesHeader chatId={this.props.selectedChatId} />
            <Messages 
                chatId={this.props.selectedChatId} 
                onChatUpdate={this.handleChatUpdate} 
                updateChat={this.state.updateChat}
            />
            <MessagesTextInput 
                chatId={this.props.selectedChatId}
                onChatUpdate={this.handleChatUpdate}
                updateChat={this.state.updateChat}
            />
        </div>
        )
    }
}

export default ChatMessagesContainer;