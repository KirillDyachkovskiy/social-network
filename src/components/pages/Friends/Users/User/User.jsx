import { Link } from 'react-router-dom';
import { Avatar } from '../../../../ui/Avatar';
import { Button } from '../../../../ui/Button';
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
        <Status status={user.status} />
      </div>
      <Button
        disabled={followingInProgress.some(item => item === user.id)}
        onClick={() => toggleFollow(user.id, user.followed)} >
        {(user.followed) ? 'Unfollow' : 'Follow'}
      </Button>
    </div>
  )
}
