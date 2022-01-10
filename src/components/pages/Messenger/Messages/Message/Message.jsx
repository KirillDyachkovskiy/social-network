import c from "./Message.module.scss";

const Message = ({ id, sender, text }) => {

    const setStyle = () => (sender === 0) ? c.to : c.from;

    return (
        <div id={id} className={`${c.message} ${setStyle()}`}>{text}</div>
    )
}

export { Message };
