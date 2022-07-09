import { Link } from 'react-router-dom';
import { Avatar, Button, Field } from '../../ui';
import s from './userCard.module.scss';
import { User, UserId } from '../../../data/types/Api';
import useUserSubscribeMutate from '../../../data/hooks/useUserSubscribeMutate';

interface IUserCard {
  user: User;
}

function UserCard({ user }: IUserCard) {
  const { id, name, status, followed, photos } = user;
  const { mutate: toggleSubscribe, isLoading } = useUserSubscribeMutate();

  const handleClick = (userId: UserId, followed: boolean) => () => {
    toggleSubscribe({ userId, followed });
  };

  return (
    <Field color='grey'>
      <article className={s.user}>
        <Link to={`/${id}`}>
          <Avatar size='medium' src={photos.small} />
        </Link>
        <div className={s.user__box}>
          <p>{name}</p>
          <p>{status}</p>
          <Button onClick={handleClick(id, followed)} disabled={isLoading}>
            {followed ? 'Unfollow' : 'Follow'}
          </Button>
        </div>
      </article>
    </Field>
  );
}

export default UserCard;
