import { Link } from 'react-router-dom';
import { Avatar } from '../../../../ui/Avatar';
import { Button } from '../../../../ui/Button';
import { Status } from '../../../../ui/Status/Status';
import { useForm } from 'react-hook-form';
import c from './User.module.scss';

export const User = ({ user, toggleFollow, followingInProgress }) => {
  const { handleSubmit } = useForm();
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
      <form
        autoComplete='off'
        onSubmit={handleSubmit(() => toggleFollow(user.id, user.followed))} >
        <Button
          disabled={followingInProgress.some(item => item === user.id)} >
          {(user.followed) ? 'Unfollow' : 'Follow'}
        </Button>
      </form>
    </div>
  )
}
