import c from "./Content.module.scss";
import { Message } from './Message'

const Content = (props) => {
    const { messages } = props;

    const messagesElement = messages.map(m => <Message key={m.id.toString()} id={m.id} sender={m.sender} text={m.text} />)

    return (
        <section className={c.content}>
            {messagesElement}
        </section>
    )
};

export { Content };