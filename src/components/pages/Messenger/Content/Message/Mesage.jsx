import c from "./Message.module.scss";

const Message = (props) => {
    const { id, sender, text } = props;

    const setStyle = (sender) => (sender === 1) ? c.to : c.from;

    return (
        <div id={id} className={`${c.message} ${setStyle(sender)}`}>{text}</div>
    )
}

export { Message };