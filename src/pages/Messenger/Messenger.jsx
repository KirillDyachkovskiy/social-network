import c from "./Messenger.module.scss"

import { Content } from "./Content"
import { Dialog } from './Dialog'

const Messenger = () => {
    return (
        <section className={c.messenger}>
            <Content />
            <aside>
                <div className={c.menu}>
                    <Dialog id="1" name="Алексей Захаров" />
                    <Dialog id="2" name="Петя Беляшёв" />
                    <Dialog id="3" name="Айсен Николаев" />
                    <Dialog id="4" name="Сергей Мальцев" />
                    <Dialog id="5" name="Николай Колесов" />
                </div>
            </aside>
        </section>
    )
}

export { Messenger };