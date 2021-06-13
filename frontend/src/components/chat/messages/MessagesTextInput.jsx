import React, { Component } from 'react';
import '../../../App.css';

import { process.env.REACT_APP_API_URL } from '../../../constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

const ENTER_KEY_CODE = 13;


class MessagesTextInput extends Component {
    constructor(props) {
        super(props);

        this.state = { text: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    handleSend(event) {
        if (event.type === 'click' || 
            (event.type === 'keydown' && event.keyCode === ENTER_KEY_CODE) ) {
        // alert('A message was submitted: ' + this.state.text);
            const message = event.target.value;
            console.log('text input submit', message)
            axios
                .post(`${process.env.REACT_APP_API_URL}/chats/${this.props.chatId}`, {
                    "bot": false,
                    "message": message
                })
                .then(res => {
                    this.props.onChatUpdate(true);
                })
                .catch(err => console.log('Error POSTing message: ', err));

            this.setState({ text: '' });
        }

    }

    render() {
        return (
        <div className="messages-input">
            <input type="text" 
            value={this.state.text} 
            onChange={this.handleChange} 
            onKeyDown={this.handleSend}
            />
            <FontAwesomeIcon icon={faPaperPlane} onClick={this.handleSend}/>
        </div>
        )
    }
}

export default MessagesTextInput;