import { ActionCreator } from 'redux';
import Field from '../../ui/Field';
import Submit from '../Submit';
import s from './profileWall.module.scss';
import { ANON_USER_AVATAR, ANON_USER_NAME } from '../../constants';
import Cross from '../../ui/Cross';
import Avatar from '../../ui/Avatar';
import { UserPost } from '../../services/redux/reducer/profileReducer';

interface IPost extends UserPost {
  deletePost: (id: number) => void;
  name?: string;
  photo?: string;
}

function Post({
  id,
  text,
  likes,
  deletePost,
  name = ANON_USER_NAME,
  photo = ANON_USER_AVATAR,
}: IPost) {
  return (
    <Field>
      <div className={s.post}>
        <div className={s.post__deleter}>
          <Cross onClick={() => deletePost(id)} />
        </div>
        <div className={s.post__header}>
          <Avatar src={photo} />
          <h1>{name}</h1>
        </div>
        <p>{text}</p>
        <div className={s.post__footer}>
          <p className={s.post__likes}>❤{likes}</p>
        </div>
      </div>
    </Field>
  );
}

interface IProfileWall {
  posts: Array<UserPost>;
  addPost: ActionCreator<any>;
  deletePost: (id: number) => void;
  name?: string;
  photo?: string;
  isOwner: boolean;
}

export default function ProfileWall({
  name,
  photo,
  posts,
  addPost,
  deletePost,
  isOwner,
}: IProfileWall) {
  return (
    <section className={s.wall}>
      {isOwner && (
        <Submit onSubmit={addPost} placeholder="What's new?">
          Post
        </Submit>
      )}
      <Field>{isOwner ? 'My posts' : `${name}'s posts`}</Field>
      <div className={s.wall__posts}>
        {posts.map((p: UserPost) => (
          <Post
            key={p.id}
            likes={p.likes}
            text={p.text}
            id={p.id}
            deletePost={deletePost}
            name={name}
            photo={photo}
          />
        ))}
      </div>
    </section>
  );
}
