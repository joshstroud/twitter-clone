import '../../../App.css';

function Message(props) {

    let messageAuthorClass = 'human';

    if (props.message.bot === true) {
        messageAuthorClass = 'bot';
    }

    let prefix = props.message.bot ? "Bot: " : "You: "
    return (
        <div className={`message ${messageAuthorClass}`}>
            {prefix + props.message.message}
        </div>
    )

}

export default Message;