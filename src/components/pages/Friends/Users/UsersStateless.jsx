import { User } from './User';
import c from './Users.module.scss';

export const UsersStateless = ({ users, onButtonClick }) => {
    return (
        <div className={c.users}>
            {users.map(u => <User key={u.id} user={u} onButtonClick={onButtonClick} />)}
        </div>
    )
}
