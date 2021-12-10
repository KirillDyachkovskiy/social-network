import c from "./Message.module.scss";

const Message = (props) => {
    const { id, sender, text } = props;

    // const setActive = ({ isActive }) => (isActive) ? c.active : '';

    //     const setStyle = () => (sender === 1) ? c.to : c.from;

    // console.log(setStyle);

    return (
        <div className={'sdsd'}>{text}</div>
    )
}

export { Message };