import c from './Posts.module.scss';
import {Post} from './Post';
import {PostHeader} from "./PostHeader";

export const Posts = ({posts, photo, name, onClick}) => {
  return <section className={c.posts}>
    {posts.map(p => <Post key={p.id} likes={p.likes} text={p.text} id={p.id} onClick={onClick}
                          renderPostHeader={() => <PostHeader photo={photo} name={name}/>}/>).reverse()}
  </section>
}