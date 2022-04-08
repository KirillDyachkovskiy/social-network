import { useDispatch } from 'react-redux';
import Field from '../../ui/Field';
import Submit from '../Submit';
import s from './profileWall.module.scss';
import { ANON_USER_AVATAR, ANON_USER_NAME } from '../../constants';
import Cross from '../../ui/Cross';
import Avatar from '../../ui/Avatar';
import {
  addPost,
  deletePost,
  UserPost,
} from '../../services/redux/reducer/profileReducer';

interface IPost extends UserPost {
  deletePost: (id: number) => void;
  name: string;
  photo: string;
}

function Post({ id, text, likes, deletePost, name, photo }: IPost) {
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
  name?: string;
  photo?: string;
  isOwner: boolean;
}

export default function ProfileWall({
  name = ANON_USER_NAME,
  photo = ANON_USER_AVATAR,
  posts,
  isOwner,
}: IProfileWall) {
  const dispatch = useDispatch();

  return (
    <section className={s.wall}>
      {isOwner && (
        <Submit
          onSubmit={(text: string) => dispatch(addPost(text))}
          placeholder="What's new?"
        >
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
            deletePost={(id: number) => dispatch(deletePost(id))}
            name={name}
            photo={photo}
          />
        ))}
      </div>
    </section>
  );
}
