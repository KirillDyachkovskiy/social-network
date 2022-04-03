import s from './post.module.scss';
import Field from "../../ui/Field";
import {ANON_USER_AVATAR} from "../../constants";
import Cross from "../../ui/Cross/Cross";
import Avatar from "../../ui/Avatar";

export const Post = ({id, text, likes, onClick, name, photo}) => {
  return (
    <Field>
      <div className={s.post}>
        <div className={s.post__deleter}>
          <Cross onClick={() => onClick(id)}/>
        </div>
        <div className={s.post__header}>
          <Avatar src={photo || ANON_USER_AVATAR}/>
          <h1>{name}</h1>
        </div>
        <p>{text}</p>
        <div className={s.post__footer}>
          <p className={s.post__likes}>❤ {likes}</p>
        </div>
      </div>
    </Field>
  )
}
