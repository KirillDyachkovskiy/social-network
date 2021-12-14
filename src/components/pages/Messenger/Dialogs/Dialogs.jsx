import c from "./Dialogs.module.scss";

import { Dialog } from './Dialog';

const Dialogs = ({ dialogs }) => {
    const dialogsElement = dialogs.map(d => (<Dialog key={d.id.toString()} id={d.id} name={d.name} />))

    return (
        <aside>
            <div className={c.menu}>
                {dialogsElement}
            </div>
        </aside>
    )
}

export { Dialogs };
