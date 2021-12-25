import c from './User.module.scss';

export const User = ({ user, onButtonClick }) => {
    return (
        <div className={c.user}>
            <div className={c.avatar}>
                <img src={user.photos.small ? user.photos.small : "https://i.pinimg.com/236x/76/ae/81/76ae810d7c5fcffc855799c5506b2d56.jpg"} alt="аватарка пользователя в посте" />
            </div>
            <button type="button" className={c.button} onClick={() => onButtonClick(user.id)}>{(user.followed) ? "Unfriend" : "Add friend"}</button>
            <div className={c.box}>
                <div className={c.name}>{user.name}</div>
                <div className={c.status}>{user.status ? user.status : "статус"}</div>
                <div className={c.location}>user.location.city, user.location.country</div>
            </div>
        </div>
    )
}
