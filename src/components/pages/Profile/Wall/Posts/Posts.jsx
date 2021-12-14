import c from "./Posts.module.scss";

import { Post } from "./Post/Post";

const Posts = ({ posts }) => {
    const postsElement = posts.map(p => (<Post key={p.id.toString()} likes={p.likes} text={p.text} />))

    return (
        <section className={c.posts} >
            {postsElement.reverse()}
        </section >
    );
};

export { Posts };