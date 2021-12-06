import classNames from "./Messenger.module.scss";

import { Chat } from "./Chat";
import { Dialogs } from "./Dialogs";

const Messenger = () => {
    return (
        <section className={classNames.messenger}>
            <Chat />
            <Dialogs />
        </section>
    );
}

export { Messenger };