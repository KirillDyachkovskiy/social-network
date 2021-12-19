import c from './User.module.scss';

export const User = ({ user, currentUser, onButtonClick }) => {
    const flags = ['au', 'fr', 'az', 'ua', 'us', 'ch', 'in', 'id', 'is', 'it', 'iq', 'mn'];

    return (
        <div className={c.user}>
            <div className={c.avatar}>
                <img src={`https://www.flagistrany.ru/data/flags/h80/${flags[user.id]}.webp`} alt="аватарка пользователя в посте" />
            </div>
            <button type="button" className={c.button} onClick={() => onButtonClick(user.id)} > {(currentUser.friends.includes(user.id)) ? "Unfriend" : "Add friend"}</button>
            <div className={c.box}>
                <div className={c.name}>{user.name}</div>
                <div className={c.status}>{user.status}</div>
                <div className={c.location}>{`${user.location.city}, ${user.location.country}`}</div>
            </div>
        </div>
    )
}
