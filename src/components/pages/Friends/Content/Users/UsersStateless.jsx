import * as axios from 'axios';
import { User } from './User';
import c from './Users.module.scss';

export const UsersStateless = ({ users, setUsersList, onButtonClick }) => {
    if (users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then(({ data }) => {
                setUsersList(data.items);
            });
    }
    const list = users.map(u => <User key={u.id} user={u} onButtonClick={onButtonClick} />);

    return (
        <div className={c.users}>
            {list}
        </div>
    )
}
