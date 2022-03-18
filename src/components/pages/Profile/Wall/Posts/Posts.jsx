import s from './Posts.module.scss';
import {Post} from "../../../../Post";

export const Posts = ({posts, photo, name, onClick}) => {
  return <section className={s.posts}>
    {posts.map(p => <Post key={p.id} likes={p.likes} text={p.text} id={p.id} onClick={onClick} name={name} photo={photo} />).reverse()}
  </section>
}