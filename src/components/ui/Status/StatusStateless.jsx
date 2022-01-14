import c from './Status.module.scss';
import { ANON_USER_STATUS } from '../../../js/variables';

export const StatusStateless = ({ status, changeAuthedUserStatus, editMode, toggeEditMode }) => {
    return (
        <div className={c.status}>
            {(editMode)
                ? <input
                    type='text'
                    className={c.input}
                    value={status || ANON_USER_STATUS}
                    autoFocus
                    onDoubleClick={() => toggeEditMode()}
                    onChange={(e) => changeAuthedUserStatus(e.target.value)} />
                : <p className={c.label} onDoubleClick={() => toggeEditMode()} >
                    {status || ANON_USER_STATUS}
                </p>}
        </div>
    );
}
