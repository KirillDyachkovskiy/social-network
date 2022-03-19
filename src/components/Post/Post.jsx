import s from './post.module.scss';
import {Field} from "../../ui/Field";
import {ANON_USER_AVATAR} from "../../constants";
import {Cross} from "../../ui/Cross/Cross";
import {Avatar} from "../../ui/Avatar";

export const Post = ({id, text, likes, onClick, name, photo}) => {
  return (
    <Field>
      <section className={s.post}>
        <div className={s.post__deleter}>
          <Cross onClick={() => onClick(id)}/>
        </div>
        <div className={s.post__header}>
          <div style={{gridArea: 'avatar'}}>
            <Avatar src={photo || ANON_USER_AVATAR} />
          </div>
          <h1 className={s.post__name}>{name}</h1>
          <div className={s.post__time}>
            вчера в 10:21
          </div>
        </div>
        <div className={s.post__content}>
          <p>{text}</p>
        </div>
        <div className={s.post__footer}>
          <span>❤</span>
          <div className={s.post__likes}>
            {likes}
          </div>
        </div>
      </section>
    </Field>
  )
}
