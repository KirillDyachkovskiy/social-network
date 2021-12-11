import c from "./Content.module.scss";
import { Message } from './Message'

const Content = () => {
    const messagesData = [
        { id: 1, sender: 1, text: "Hi" },
        { id: 2, sender: 2, text: "I'm glad to see you" },
        { id: 3, sender: 1, text: "We'll go to the gym tomorrow" },
    ]

    const messages = messagesData.map(m => <Message key={m.id.toString()} id={m.id} sender={m.sender} text={m.text} />)

    return (
        <section className={c.content}>
            {messages}
        </section>
    )
};

export { Content };