import { Link } from 'react-router-dom';
import c from './User.module.scss';

export const User = ({ user, onClick }) => {
    return (
        <div className={c.user}>
            <div className={c.avatar}>
                <Link to={`/${user.id}`}>
                    <img src={user.photos.small ? user.photos.small : 'https://i.pinimg.com/236x/76/ae/81/76ae810d7c5fcffc855799c5506b2d56.jpg'} alt='аватарка пользователя в посте' />
                </Link>
            </div>
            <div className={c.box}>
                <div className={c.name}>{user.name}</div>
                <div className={c.status}>{user.status ? user.status : ''}</div>
            </div>
            <button type='button' className={c.button} onClick={() => onClick(user.id)}>{(user.followed) ? 'Unfriend' : 'Add friend'}</button>
        </div>
    )
}
