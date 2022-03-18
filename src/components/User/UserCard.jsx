import {Link} from 'react-router-dom';
import {Button} from '../../ui/Button';
import {useForm} from 'react-hook-form';
import s from './userCard.module.scss';
import {Field} from "../../ui/Field";
import {ANON_USER_AVATAR} from "../../constants";
import {Avatar} from "../../ui/Avatar";

export const UserCard = ({user, toggleFollow, followingInProgress}) => {
  const {handleSubmit} = useForm();
  return (
    <Field style={{backgroundColor: '#f1f1f1', overflow: 'hidden'}}>
      <div className={s.user}>
        <div style={{gridArea: 'avatar'}}>
          <Link to={"/" + user.id}>
            <Avatar size='medium' src={user.photos.small || ANON_USER_AVATAR}/>
          </Link>
        </div>
        <div className={s.box}>
          <div className={s.name}>{user.name}</div>
          <p>{user.status}</p>
        </div>
        <form
          autoComplete='off'
          onSubmit={handleSubmit(() => toggleFollow(user.id, user.followed))}>
          <Button
            disabled={followingInProgress.some(item => item === user.id)}>
            {(user.followed) ? 'Unfollow' : 'Follow'}
          </Button>
        </form>
      </div>
    </Field>
  )
}
