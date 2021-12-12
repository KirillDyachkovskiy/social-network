import c from "./Message.module.scss";

const Message = (props) => {
    const { id, sender, text } = props;

    const setStyle = () => (sender === 0) ? c.to : c.from;


    return (
        <div id={id} className={`${c.message} ${setStyle()}`}>{text}</div>
    )
}

export { Message };