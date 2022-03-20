import {Field} from "../../ui/Field";
import {Submit} from "../../ui/Submit";
import {Post} from "../Post";
import {addPost, deletePost} from "../../services/redux/reducer/profileReducer";
import {connect} from "react-redux";
import s from './profileWall.module.scss';

const ProfileWallStateless = ({visitedProfile, posts, addPost, deletePost}) => {
  const {fullName, photos: {small: photo}} = visitedProfile;

  return (
    <section className={s.wall}>
      <Submit onSubmit={addPost} placeholder="What's new?">Post</Submit>
      <Field>My posts</Field>
      <div className={s.wall__posts}>
        {posts.map(p => <Post key={p.id} likes={p.likes} text={p.text} id={p.id} onClick={deletePost}
                              name={fullName} photo={photo}/>)}
      </div>
    </section>
  );
}

export const ProfileWall = connect(null, {addPost, deletePost})(ProfileWallStateless);
