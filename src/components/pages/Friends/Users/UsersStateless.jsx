import { User } from './User';
import c from './Users.module.scss';

export const UsersStateless = ({ users, onClick }) => {
    return (
        <div className={c.users}>
            {users.map(u => <User key={u.id} user={u} onClick={onClick} />)}
        </div>
    )
}
