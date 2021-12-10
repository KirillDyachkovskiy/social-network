import c from "./Messenger.module.scss"

import { Content } from "./Content"
import { Dialog } from './Dialog'

const Messenger = () => {
    const dialogsData = [
        { id: 1, name: "Алексей Захаров" },
        { id: 2, name: "Петя Беляшёв" },
        { id: 3, name: "Айсен Николаев" },
        { id: 4, name: "Сергей Мальцев" },
        { id: 5, name: "Николай Колесов" },
    ]

    const dialogs = dialogsData.map(d => (<Dialog key={d.id.toString()} id={d.id} name={d.name} />))

    return (
        <section className={c.messenger}>
            <Content />
            <aside>
                <div className={c.menu}>
                    {dialogs}
                </div>
            </aside>
        </section>
    )
}

export { Messenger };