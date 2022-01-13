import { Link } from 'react-router-dom';
import { Avatar } from '../../../../ui/Avatar';
import { Follower } from '../../../../ui/Follower';
import { Status } from '../../../../ui/Status/Status';
import c from './User.module.scss';

export const User = ({ user, toggleFollow, followingInProgress }) => {
    return (
        <div className={c.user}>
            <div className={c.avatar}>
                <Link to={"/" + user.id}>
                    <Avatar src={user.photos.small} />
                </Link>
            </div>
            <div className={c.box}>
                <div className={c.name}>{user.name}</div>
                <Status >
                    {user.status}
                </Status>
            </div>
            <Follower
                id={user.id}
                followed={user.followed}
                onClick={toggleFollow}
                followingInProgress={followingInProgress} />
        </div>
    )
}
