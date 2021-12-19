import { User } from './User';
import c from './Users.module.scss';

export const UsersStateless = ({ users }) => {
    const list = users.list.map(u => <User key={u.id} id={u.id} name={u.name} status={u.status} location={u.location} />);
    return (
        <div className={c.users}>
            {list}
        </div>
    )
}
