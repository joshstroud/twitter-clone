import React, { Component } from 'react';
import '../../../App.css';

import { process.env.REACT_APP_API_URL } from '../../../constants'

import axios from 'axios';

import MessagesHeader from './MessagesHeader'
import Message from './Message';

const dummyChat = {
    "_id": "608edb1d50a1e85e383efc8f",
    "messages": [
        {
            "_id": "608edb2f50a1e85e383efc90",
            "bot": false,
            "message": "Where do you live?",
            "chat_id": "608edb1d50a1e85e383efc8f",
            "sent_date": "2021-05-02T17:02:39.919Z",
            "__v": 0
        },
        {
            "_id": "608edb3150a1e85e383efc92",
            "bot": true,
            "message": "I live in the US.",
            "chat_id": "608edb1d50a1e85e383efc8f",
            "sent_date": "2021-05-02T17:02:41.620Z",
            "__v": 0
        },
        {
            "_id": "608edb4350a1e85e383efc94",
            "bot": false,
            "message": "What do you do there?",
            "chat_id": "608edb1d50a1e85e383efc8f",
            "sent_date": "2021-05-02T17:02:59.620Z",
            "__v": 0
        },
        {
            "_id": "608edb4550a1e85e383efc96",
            "bot": true,
            "message": "I work in a call center.",
            "chat_id": "608edb1d50a1e85e383efc8f",
            "sent_date": "2021-05-02T17:03:01.291Z",
            "__v": 0
        },
        {
            "_id": "608edb5850a1e85e383efc98",
            "bot": false,
            "message": "What type of call center?",
            "chat_id": "608edb1d50a1e85e383efc8f",
            "sent_date": "2021-05-02T17:03:20.470Z",
            "__v": 0
        },
        {
            "_id": "608edb5a50a1e85e383efc9a",
            "bot": true,
            "message": "I work in a call center.",
            "chat_id": "608edb1d50a1e85e383efc8f",
            "sent_date": "2021-05-02T17:03:22.192Z",
            "__v": 0
        }
    ],
    "__v": 0
};

class Messages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chat: {}
        };
    }

    componentDidMount() {
        // axios
        //     .get(`${process.env.REACT_APP_API_URL}/chats/`)
        //     .then(res => {
        //         t
        //     })
    }

    componentDidUpdate(prevProps) {
        if (this.props.chatId !== prevProps.chatId) {
            this.getChat(this.props.chatId)
        }
    }

    getChat(chatId) {
        axios
            .get(`${process.env.REACT_APP_API_URL}/chats/${this.props.chatId}`)
            .then(res => {
                // console.log(res);
                this.setState({ chat: res.data })
            });
    }

    generateMessagesComponents(chat) {
        return chat.messages.map(message => (
            <Message message={message} />
        ))
    }

    render() {

        if(this.props.updateChat) {
            this.getChat(this.state.chat._id);
            this.props.onChatUpdate(false);
        }

        // const messages = this.generateMessagesComponents(dummyChat);
        let messages = [];

        if (this.state.chat._id) {
            messages = this.generateMessagesComponents(this.state.chat);
        }

        return (
            <div className="messages">
                {messages}
            </div>
        )
    }
}

export default Messages;