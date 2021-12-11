import c from "./Content.module.scss";
import { Message } from './Message'
import { SubmitMessage } from "./SubmitMessage";

const Content = (props) => {
    const { state } = props;

    const messages = state.messages.map(m => <Message key={m.id.toString()} id={m.id} sender={m.sender} text={m.text} />)

    return (
        <section className={c.content}>
            <div>
                {messages}
            </div>
            <SubmitMessage />
        </section>
    )
};

export { Content };