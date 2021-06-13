import React, { Component } from 'react';
import '../../../App.css';

import { process.env.REACT_APP_API_URL } from '../../../constants'
import ChatSidebarItem from './ChatSidebarItem';

import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const dummyChats = [
    {
        "_id": "608dcbbb149e5a441c0a9030",
        "messages": [
            {
                "_id": "608ddafdafb7814a4d4e3df6",
                "bot": true,
                "message": "This is a message from a bot 2",
                "chat_id": "608dcbbb149e5a441c0a9030",
                "sent_date": "2021-05-01T22:49:33.155Z",
                "__v": 0
            }
        ],
        "__v": 0
    },
    {
        "_id": "608ddb776466504ab3e499dd",
        "messages": [
            {
                "_id": "608df1a777baa651f8e1abf9",
                "bot": false,
                "message": "Hello. It's nice to meet you",
                "chat_id": "608ddb776466504ab3e499dd",
                "sent_date": "2021-05-02T00:26:15.846Z",
                "__v": 0
            }
        ],
        "__v": 0
    }, {
        "_id": "608dcbbb149e5a4241c0a9030",
        "messages": [
            {
                "_id": "608ddafdafb7814a4d4e3df6",
                "bot": true,
                "message": "This is a message from a bot 2",
                "chat_id": "608dcbbb149e5a441c0a9030",
                "sent_date": "2021-05-01T22:49:33.155Z",
                "__v": 0
            }
        ],
        "__v": 0
    },
    {
        "_id": "608ddb7764665304ab3e499dd",
        "messages": [
            {
                "_id": "608df1a777baa651f8e1abf9",
                "bot": false,
                "message": "Hello. It's nice to meet you",
                "chat_id": "608ddb776466504ab3e499dd",
                "sent_date": "2021-05-02T00:26:15.846Z",
                "__v": 0
            }
        ],
        "__v": 0
    },
    {
        "_id": "608dcbbb149e5a4414c0a9030",
        "messages": [
            {
                "_id": "608ddafdafb7814a4d4e3df6",
                "bot": true,
                "message": "This is a message from a bot 2",
                "chat_id": "608dcbbb149e5a441c0a9030",
                "sent_date": "2021-05-01T22:49:33.155Z",
                "__v": 0
            }
        ],
        "__v": 0
    },
    {
        "_id": "608ddb776466504ab53e499dd",
        "messages": [
            {
                "_id": "608df1a777baa651f8e1abf9",
                "bot": false,
                "message": "Hello. It's nice to meet you",
                "chat_id": "608ddb776466504ab3e499dd",
                "sent_date": "2021-05-02T00:26:15.846Z",
                "__v": 0
            }
        ],
        "__v": 0
    },
];

class ChatSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: []
        };

        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.getChats = this.getChats.bind(this);
    }

    componentDidMount() {
        this.getChats();
    }

    getChats() {
        axios
            .get(`${process.env.REACT_APP_API_URL}/chats/`)
            .then(res => {
                this.setState({
                    chats: res.data
                });
            });
    }

    handleCreateClick(event) {
        console.log('click');
        axios
            .post(`${process.env.REACT_APP_API_URL}/chats`)
            .then(res => {
                this.getChats();
            })
    }

    render() {
        
        // console.log(this.state.chats)
        const chats = this.state.chats.map(chatData => 
            {
                let selected = (chatData._id === this.props.selectedChatId);
            return (
                <ChatSidebarItem 
                    selected={selected} 
                    onChatSelected={this.props.onChatSelected}
                    chatData={chatData} 
                    key={chatData._id} 
                    updateChat={this.getChats}
                    />
                );
            }
        );

        // console.log(chats);

        return (
        <div className="left-sidebar">
            <div className="create-icon-container">
                <div 
                className="round-box" 
                onClick={this.handleCreateClick}
                >
                    <FontAwesomeIcon 
                    icon={faEdit} 
                    onClick={this.handleSend} 
                    transform="right-6 down-4"
                    />
                </div>
            </div>
            {chats}
        </div>
        )
    }
}

export default ChatSidebar;