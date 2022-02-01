import c from './Post.module.scss';
import {Field} from "../../../../../ui/Field";

export const Post = ({id, text, likes, onClick, renderPostHeader}) => {
  return (
    <Field>
      <section className={c.post}>
        <div className={c.deleter} onClick={() => onClick(id)}>×</div>
        {renderPostHeader()}
        <div className={c.content}>
          <p>{text}</p>
        </div>
        <div className={c.postFooter}>
          <span>❤</span>
          <div className={c.likes}>
            {likes}
          </div>
        </div>
      </section>
    </Field>
  )
}
