import c from "./Messenger.module.scss"

import { Content } from "./Content"
import { Dialog } from './Dialog'

const Messenger = ({ store }) => {
    const dialogs = store.getState().messenger.dialogs.map(d => (<Dialog key={d.id.toString()} id={d.id} name={d.name} />))

    return (
        <section className={c.messenger}>
            <Content store={store} />
            <aside>
                <div className={c.menu}>
                    {dialogs}
                </div>
            </aside>
        </section>
    )
}

export { Messenger };