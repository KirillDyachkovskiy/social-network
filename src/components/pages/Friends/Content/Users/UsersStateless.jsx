import * as axios from 'axios';
import React from 'react';
import { User } from './User';
import c from './Users.module.scss';

export const UsersStateless = ({ users, setUsersList, onButtonClick }) => {
    const getUsers = () => {
        if (users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(({ data }) => {
                    setUsersList(data.items);
                });
        }

    }
    const list = users.map(u => <User key={u.id} user={u} onButtonClick={onButtonClick} />);

    return (
        <>
            <button onClick={getUsers}>Найти пользователей</button>
            <div className={c.users}>
                {list}
            </div>
        </>
    )
}
