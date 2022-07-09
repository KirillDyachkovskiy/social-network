import { useState } from 'react';
import ProfilePost from '../ProfilePost';
import { Field, Submit } from '../../ui';
import { POSTS } from '../../../data/constants';
import { UserPost } from '../../../data/types/Api';
import s from './profileWall.module.scss';

interface IProfileWall {
  name?: string;
  photo?: string;
  isOwner: boolean;
}

function ProfileWall({ name, photo, isOwner }: IProfileWall) {
  const [posts, setPosts] = useState<UserPost[]>(POSTS); // вынести в контекст

  const addPost = (text: string) =>
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        id: prevPosts.length,
        text,
        likes: Math.trunc(Math.random() * 100),
      },
    ]);

  const deletePost = (id: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <section className={s.wall}>
      {isOwner && (
        <Field>
          <Submit reset required placeholder="What's new?" onSubmit={addPost}>
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
            deletePost={deletePost}
            name={name}
            photo={photo}
          />
        ))}
      </div>
    </section>
  );
}

export default ProfileWall;
