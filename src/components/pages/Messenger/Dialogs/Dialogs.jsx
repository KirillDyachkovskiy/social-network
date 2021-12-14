import c from "./Dialogs.module.scss";

import { Dialog } from './Dialog';
import { StoreContext } from "../../../../storeContext";

const Dialogs = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const dialogsElement = store.getState().messenger.dialogs.map(d => (<Dialog key={d.id.toString()} id={d.id} name={d.name} />))
                    return (
                        <aside>
                            <div className={c.menu}>
                                {dialogsElement}
                            </div>
                        </aside>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export { Dialogs };
