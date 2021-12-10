import c from "./Message.module.scss";

const Message = (props) => {
    const { id, sender, text } = props;

    // const setActive = ({ isActive }) => (isActive) ? c.active : '';

    // const setStyle = ({ sender }) => (sender === 1) ? c.to : c.from;
    // console.log(setStyle);
    return (
        <div className={"lorem"}>{text}</div>
    )
}

export { Message };