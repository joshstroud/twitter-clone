const express = require('express');
const router = express.Router();

const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

const conversationAPI = require('../../hugging-face-api/conversationAPI');

const chatModels = require('../../models/Chat');
// const Chat = require('../../models/Chat');

router.use(bodyParser.json());

router.use(cors());

router.post('/', (req, res) => {
    console.log('Created chat');
    chatModels.chat.create(req.body)
        .then(chat => res.json(chat))
        .catch(err => res.status(400).json({ error: 'Unable to create chat'}));    
});

// return chats with all data, not sure why I would want this
// router.get('/', (req, res) => {
//     chatModels.chat.find()
//         .then(chats => res.json(chats))
//         .catch(err => res.status(404).json({ nochatsfound: 'No chats found'}));
// })

router.get('/', (req, res) => {
    console.log('Get all chats');

    chatModels.chat.find()
        .then(chats => {
            // only return last message in chat for getting all chats
            const shortChats = chats.map(chat => {
                chat.messages = [chat.messages[chat.messages.length - 1]];
                return chat;
            })
            res.json(shortChats);
        })
        .catch(err => res.status(404).json({ nochatsfound: 'No chats found'}));
})

router.get('/:chatId', (req, res) => {
    console.log(`Get chat with id ${req.params.chatId}`);

    chatModels.chat.findById(req.params.chatId)
        .then(chat => res.json(chat))
        .catch(err => res.status(404).json( {nochatsfound: 'Chat with given id not found'}));
});


// bug here, doesn't return the full chat after bot response, need to fix
// Just do a get request after for now.
router.post('/:chatId', (req, res) => {
    console.log(`Send message "${req.body.message}" to chat id ${req.params.chatId}`);

    const chatId = req.params.chatId;
    const message = Object.assign(req.body, { chat_id: chatId });

    let updatePromise = createMessage(message);

    updatePromise.then(chat => {
        return createBotMessageInChat(chatId);
    })
    .then(chat => {
        // console.log(chat);
        res.json(chat)
    });
});

router.delete('/:chatId', (req, res) => {
    const chatId = req.params.chatId;

    console.log(`delete chat with id ${chatId}`);

    chatModels.chat.findByIdAndDelete(chatId)
        .then(chat => res.json({}))
        .catch(err => res.status(400).json({ error: 'Chat in DELETE not found'}));
});

function createBotMessageInChat(chatId) {
    return chatModels.chat.findById(chatId).then(chat => {
        let APIInput = parseMessagesForConversationAPI(chat);
        return conversationAPI.getConversationResponse(APIInput);
    })
    .then(textResponse => {
        console.log(`text response from bot "${textResponse}"`)
        const message = {
            bot: true,
            message: textResponse,
            chat_id: chatId
        };
        return createMessage(message);
    });
}

function createMessage(message) {
    return chatModels.message.create(message)
    .then(message => {
        return chatModels.chat.updateOne({ _id: message.chat_id }, { $push: { messages: message } })
    }).then(update => {
        return chatModels.chat.findById(message.chat_id);
    }).then(chat => {
        //  console.log('Added message to chat: ', chat);
        return chat;
    })
    .catch(err => ({ err, error: 'Unable to create message' }));
}

function parseMessagesForConversationAPI(chat) {
    const pastUserInputs = chat.messages.
        filter(message => message.bot === false)
        .map(msg => msg.message);
    const generatedResponses = chat.messages
        .filter(message => message.bot === true)
        .map(msg => msg.message);
    const promptText = pastUserInputs.pop();

    const input = { pastUserInputs, generatedResponses, promptText };
    // console.log(input);
    return input;
} 

module.exports = router;