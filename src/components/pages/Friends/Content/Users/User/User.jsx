import c from './User.module.scss';

export const User = ({ id, name, status, location }) => {
    const flags = ['au', 'fr', 'az', 'ua', 'us', 'ch', 'in', 'id', 'is', 'it', 'iq', 'mn']
    return (
        <div className={c.user}>
            <div className={c.avatar}>
                <img src={`https://www.flagistrany.ru/data/flags/h80/${flags[id]}.webp`} alt="аватарка пользователя в посте" />
            </div>
            <button type="button" className={c.button} >Follow</button>
            <div className={c.box}>
                <div className={c.name}>{name}</div>
                <div className={c.status}>{status}</div>
                <div className={c.location}>{`${location.city}, ${location.country}`}</div>
            </div>
        </div>
    )
}
