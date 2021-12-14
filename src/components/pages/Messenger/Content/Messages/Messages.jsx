import c from "./Messages.module.scss";

import { Message } from './Message';

const Messages = ({ messages }) => {
    const messagesElement = messages.map(m => <Message key={m.id.toString()} id={m.id} sender={m.sender} text={m.text} />)

    return (
        <section className={c.messages}>
            <div></div>
            {messagesElement}
        </section>
    )
}

export { Messages };
