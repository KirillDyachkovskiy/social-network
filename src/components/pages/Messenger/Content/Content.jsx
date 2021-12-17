import c from './Content.module.scss'
import { Messages } from './Messages'
import { SubmitMessage } from "./SubmitMessage";

export const Content = () => {
    return (
        <div className={c.content}>
            <Messages />
            <SubmitMessage />
        </div>
    )
};
