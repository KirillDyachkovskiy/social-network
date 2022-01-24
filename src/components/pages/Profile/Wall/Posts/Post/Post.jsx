import c from './Post.module.scss';

export const Post = ({text, likes, renderPostHeader}) => {
  return <section className={c.post}>
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
}
