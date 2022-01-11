import c from './Info.module.scss';
import { Status } from './Status/Status';

export const InfoStateLess = ({ user, changeStatus }) => {
    return (
        <section className={c.info}>
            <Status text={user.status} onChange={changeStatus} />
            <div className={c.row}>
                <span>Birthday:</span>
                <span>{user.birthday.toLocaleDateString()}</span>
            </div>
            <div className={c.row}>
                <span>Current city:</span>
                <span>{`${user.location.city} / ${user.location.country}`}</span>
            </div>
            <div className={c.row}>
                <span>Education:</span>
                <span>{user.education}</span>
            </div>
            <div className={c.row}>
                <span>Wed-site:</span>
                <a href={user.web_site} target='_blank' rel='noreferrer'>{user.web_site}</a>
            </div>
        </section>
    )
};