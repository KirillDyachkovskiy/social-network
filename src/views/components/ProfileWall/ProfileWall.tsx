import { useDispatch } from 'react-redux';
import {
  addPost,
  deletePost,
  UserPost,
} from '../../../data/redux/reducers/profileReducer';
import ProfilePost from '../ProfilePost';
import { Field, Submit } from '../../ui';
import s from './profileWall.module.scss';

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
  const dispatch = useDispatch();

  return (
    <section className={s.wall}>
      {isOwner && (
        <Field>
          <Submit
            reset
            required
            placeholder="What's new?"
            onSubmit={(text: string) => dispatch(addPost(text))}
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
