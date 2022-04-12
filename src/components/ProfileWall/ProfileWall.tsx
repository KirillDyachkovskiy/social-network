import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Field from '../../ui/Field';
import Submit from '../Submit';
import s from './profileWall.module.scss';
import Cross from '../../ui/Cross';
import Avatar from '../../ui/Avatar';
import {
  addPost,
  deletePost,
  UserPost,
} from '../../services/redux/reducer/profileReducer';

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
  name = 'Anonymous',
  photo,
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
  name?: string;
  photo?: string;
  isOwner: boolean;
}

export default function ProfileWall({
  name,
  photo,
  posts,
  isOwner,
}: IProfileWall) {
  const [inputValue, setInputValue] = useState<string>('');

  const dispatch = useDispatch();

  return (
    <section className={s.wall}>
      {isOwner && (
        <Field>
          <Submit
            reset
            placeholder="What's new?"
            value={inputValue}
            onChange={setInputValue}
            onSubmit={() => dispatch(addPost(inputValue))}
            disabled={!inputValue}
          >
            Post
          </Submit>
        </Field>
      )}
      <Field>{name && (isOwner ? 'My posts' : `${name}'s posts`)}</Field>
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
