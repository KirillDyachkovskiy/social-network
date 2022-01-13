import { NavLink } from 'react-router-dom';
import { ANON_USER_NAME } from '../../../../../js/variables';

import c from './Login.module.scss';

export const Login = ({ login }) => {
    return (
        <NavLink to='/'>
            <div className={c.login}>
                <p>{login || ANON_USER_NAME}</p>
            </div>
        </NavLink>
    )
}
