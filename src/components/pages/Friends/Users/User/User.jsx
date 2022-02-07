import {Link} from 'react-router-dom';
import {Button} from '../../../../ui/Button';
import {useForm} from 'react-hook-form';
import c from './User.module.scss';
import {Field} from "../../../../ui/Field";
import {Image} from "../../../../ui/Image";
import {ANON_USER_AVATAR} from "../../../../../constants";

export const User = ({user, toggleFollow, followingInProgress}) => {
  const {handleSubmit} = useForm();
  return (
    <Field style={{backgroundColor: '#f1f1f1', overflow: 'hidden'}}>
      <div className={c.user}>
        <div style={{gridArea: 'avatar'}}>
          <Link to={"/" + user.id}>
            <Image src={user.photos.small || ANON_USER_AVATAR}
                   style={{width: '96px', height: '96px', borderRadius: '50%'}}/>
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
