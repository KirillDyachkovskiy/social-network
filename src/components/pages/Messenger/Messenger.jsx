import c from "./Messenger.module.scss"

import { Content } from "./Content"
import { Dialogs } from './Dialogs'

const Messenger = ({ store }) => {
    return (
        <section className={c.messenger}>
            <Content store={store} />
            <Dialogs dialogs={store.getState().messenger.dialogs} />
        </section>
    )
}

export { Messenger };