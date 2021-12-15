import c from "./Messenger.module.scss"

import { Content } from "./Content"
import { Dialogs } from './Dialogs'

const Messenger = () => {
    return (
        <section className={c.section}>
            <Content />
            <Dialogs />
        </section>
    )
};

export { Messenger };