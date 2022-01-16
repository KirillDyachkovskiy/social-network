import c from './Status.module.scss';
import { ANON_USER_STATUS } from '../../../variables';

export const StatusStateless = ({ status, onChange, editMode, toggleEditMode }) => {
    return (
        <div className={c.status}>
            {(editMode)
                ? <input
                    type='text'
                    className={c.input}
                    autoFocus
                    value={status}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={() => { toggleEditMode() }} />
                : <p className={c.label} onDoubleClick={() => toggleEditMode()} >
                    {status || ANON_USER_STATUS}
                </p>}
        </div>
    );
}
