import c from "./Messages.module.scss";

import { Message } from './Message';
import { StoreContext } from "../../../../../storeContext";

const Messages = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const messagesElement = store.getState().messenger.messages.map(m => <Message key={m.id.toString()} id={m.id} sender={m.sender} text={m.text} />)
                    return (
                        <section className={c.messages}>
                            <div></div>
                            {messagesElement}
                        </section>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export { Messages };
