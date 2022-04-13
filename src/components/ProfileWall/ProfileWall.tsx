import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Field from '../../ui/Field';
import Submit from '../Submit';
import s from './profileWall.module.scss';
import {
  addPost,
  deletePost,
  UserPost,
} from '../../services/redux/reducers/profileReducer';
import ProfilePost from '../ProfilePost';

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
          <ProfilePost
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
