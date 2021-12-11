import c from "./Messenger.module.scss"

import { Content } from "./Content"
import { Dialog } from './Dialog'

const Messenger = (props) => {
    const { dialogs, messages } = props;

    const dialogsElement = dialogs.map(d => (<Dialog key={d.id.toString()} id={d.id} name={d.name} />))

    return (
        <section className={c.messenger}>
            <Content messages={messages} />
            <aside>
                <div className={c.menu}>
                    {dialogsElement}
                </div>
            </aside>
        </section>
    )
}

export { Messenger };