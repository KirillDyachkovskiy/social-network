import { Link } from 'react-router-dom';
import { User, UserId } from '../../../data/api/Api';
import { Avatar, Button, Field } from '../../ui';
import s from './userCard.module.scss';

interface IUserCard {
  user: User;
  onClick: (id: UserId, followed: boolean) => void;
  followingInProgress: Array<UserId>;
}

export default function UserCard({
  user,
  onClick,
  followingInProgress,
}: IUserCard) {
  return (
    <Field color='grey'>
      <article className={s.user}>
        <Link to={`/${user.id}`}>
          <Avatar size='medium' src={user.photos.small} />
        </Link>
        <div className={s.user__box}>
          <p>{user.name}</p>
          <p>{user.status}</p>
          <Button
            onClick={() => onClick(user.id, user.followed)}
            disabled={followingInProgress.some(
              (userId: UserId) => userId === user.id
            )}
          >
            {user.followed ? 'Unfollow' : 'Follow'}
          </Button>
        </div>
      </article>
    </Field>
  );
}
