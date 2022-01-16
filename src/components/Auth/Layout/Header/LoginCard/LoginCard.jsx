import { Link } from 'react-router-dom';
import { ANON_USER_NAME } from '../../../../../variables';

import c from './LoginCard.module.scss';

export const LoginCard = ({ login }) => {
    return (
        <Link to='/login'>
            <div className={c.loginCard}>
                <p>{login || ANON_USER_NAME}</p>
            </div>
        </Link>
    )
}
