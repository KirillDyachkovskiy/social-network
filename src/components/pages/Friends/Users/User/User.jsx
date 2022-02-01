import {Link} from 'react-router-dom';
import {Avatar} from '../../../../ui/Avatar';
import {Button} from '../../../../ui/Button';
import {useForm} from 'react-hook-form';
import c from './User.module.scss';
import {Field} from "../../../../ui/Field";

export const User = ({user, toggleFollow, followingInProgress}) => {
  const {handleSubmit} = useForm();
  return (
    <Field style={{backgroundColor: '#f1f1f1', overflow: 'hidden'}}>
      <div className={c.user}>
        <div className={c.avatar}>
          <Link to={"/" + user.id}>
            <Avatar src={user.photos.small}/>
          </Link>
        </div>
        <div className={c.box}>
          <div className={c.name}>{user.name}</div>
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
