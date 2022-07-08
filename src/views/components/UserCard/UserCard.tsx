import { Link } from 'react-router-dom';
import { Avatar, Button, Field } from '../../ui';
import s from './userCard.module.scss';
import { User, UserId, UserSubscribeRes } from '../../../data/types/Api';

interface IUserCard {
  user: User;
  onClick: ({ userId, followed }: UserSubscribeRes) => void;
  followingInProgress: Array<UserId>;
}

function UserCard({ user, onClick, followingInProgress }: IUserCard) {
  const handleClick = (userId: UserId, followed: boolean) => () => {
    onClick({ userId, followed });
  };

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
            onClick={handleClick(user.id, user.followed)}
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

export default UserCard;
