import { ANON_USER_STATUS } from '../../../js/variables';
import c from './Status.module.scss';

export const Status = ({ children }) => {
    return (
        <div className={c.status}>
            <input type='text' className={c.input} value={children || ANON_USER_STATUS} disabled />
        </div>
    );
}
