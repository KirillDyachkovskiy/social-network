import c from './Post.module.scss';

export const Post = ({id, text, likes, onClick, renderPostHeader}) => {
  return <section className={c.post}>
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
}
