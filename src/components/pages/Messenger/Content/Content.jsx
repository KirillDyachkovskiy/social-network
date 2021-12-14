import c from "./Content.module.scss";
import { Messages } from './Messages'
import { SubmitMessage } from "./SubmitMessage";

const Content = ({ store }) => {
    return (
        <section className={c.content}>
            <Messages messages={store.getState().messenger.messages} />
            <SubmitMessage store={store} />
        </section>
    )
};

export { Content };