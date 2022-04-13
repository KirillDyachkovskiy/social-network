import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import Field from '../../ui/Field';
import Avatar from '../../ui/Avatar';
import { UserId, User } from '../../services/protocol/Api';
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
