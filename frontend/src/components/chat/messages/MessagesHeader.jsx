function MessagesHeader(props) {
    return (
        <div className="messages-header">{`Chat ID: ${props.chatId}`}</div>
    )
}

export default MessagesHeader;