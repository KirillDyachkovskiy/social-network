import s from './post.module.scss';
import {Field} from "../../ui/Field";
import {Image} from "../../ui/Image";
import {ANON_USER_AVATAR} from "../../constants";
import {Cross} from "../../ui/Cross/Cross";
import {Avatar} from "../../ui/Avatar";

export const Post = ({id, text, likes, onClick, name, photo}) => {
  return (
    <Field>
      <section className={s.post}>
        <div className={s.deleter}>
          <Cross onClick={() => onClick(id)}/>
        </div>
        <div className={s.postHeader}>
          <div style={{gridArea: 'avatar'}}>
            <Avatar src={photo || ANON_USER_AVATAR} />
          </div>
          <h1 className={s.name}>{name}</h1>
          <div className={s.time}>
            вчера в 10:21
          </div>
        </div>
        <div className={s.content}>
          <p>{text}</p>
        </div>
        <div className={s.postFooter}>
          <span>❤</span>
          <div className={s.likes}>
            {likes}
          </div>
        </div>
      </section>
    </Field>
  )
}
