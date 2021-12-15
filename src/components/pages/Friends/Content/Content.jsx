import c from "./Content.module.scss";
import { Messages } from './Messages'
import { SubmitMessage } from "./SubmitMessage";

const Content = () => {
    return (
        <section className={c.content}>
            <Messages />
            <SubmitMessage />
        </section>
    )
};

export { Content };