import React, { Component } from 'react';
import '../../../App.css';

import axios from 'axios';

import { API_URL } from '../../../constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class ChatSidebarItem extends Component {
    constructor(props) {
        super(props);

        this.deleteChat = this.deleteChat.bind(this);
    }

    deleteChat() {
        axios
            .delete(`${API_URL}/chats/${this.props.chatData._id}`)
            .then(res => this.props.updateChat());
    }

    render() {
        let selected = this.props.selected ? 'selected' : '';
        // console.log(this.props.chatData);

        let message = '';
        if (this.props.chatData.messages[0] !== null) {
            message = this.props.chatData.messages[0].message;
        }
        return (
            <div className={`sidebar-item ${selected}`}>
                <div 
                    onClick={() => this.props.onChatSelected(this.props.chatData._id)} 
                    className={`text`}
                >
                    <div className="id">Chat ID: {this.props.chatData._id}</div>
                    <div>{message}</div>
                </div>
                <div className="trash">
                    <FontAwesomeIcon 
                        icon={faTrash} 
                        onClick={this.deleteChat} 
                        transform="down-6 right-7"
                    />
                </div>
            </div>
        )
    }
}

export default ChatSidebarItem;