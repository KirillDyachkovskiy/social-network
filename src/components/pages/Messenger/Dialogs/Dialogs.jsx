import c from "./Dialogs.module.scss";

import { Dialog } from './Dialog';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ dialogs: state.messenger.dialogs, })

const DialogsStateless = ({ dialogs }) => {
    return (
        <aside>
            <div className={c.menu}>
                {dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name} />)}
            </div>
        </aside>
    )
}

export const Dialogs = connect(mapStateToProps)(DialogsStateless);
