import Field from "../../ui/Field";
import Submit from "../Submit";
import {Post} from "../Post";
import s from './profileWall.module.scss';

export const ProfileWall = ({name, photo, posts, addPost, deletePost}) => {
  return (
    <section className={s.wall}>
      <Submit onSubmit={addPost} placeholder="What's new?">Post</Submit>
      <Field>My posts</Field>
      <div className={s.wall__posts}>
        {posts.map(p => <Post key={p.id} likes={p.likes} text={p.text} id={p.id} onClick={deletePost}
                              name={name} photo={photo}/>)}
      </div>
    </section>
  );
}
