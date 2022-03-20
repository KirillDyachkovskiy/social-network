import {Link} from 'react-router-dom';
import {Button} from '../../ui/Button';
import s from './userCard.module.scss';
import {Field} from "../../ui/Field";
import {Avatar} from "../../ui/Avatar";

export const UserCard = ({user, toggleFollow, followingInProgress}) => {
  return (
    <Field color='grey'>
      <div className={s.user}>
        <Link to={"/" + user.id}>
          <Avatar size='medium' src={user.photos.small}/>
        </Link>
        <div className={s.user__box}>
          <p>{user.name}</p>
          <p>{user.status}</p>
          <Button
            onClick={() => toggleFollow(user.id, user.followed)}
            disabled={followingInProgress.some(item => item === user.id)}
          >
            {(user.followed) ? 'Unfollow' : 'Follow'}
          </Button>
        </div>
      </div>
    </Field>
  )
}
