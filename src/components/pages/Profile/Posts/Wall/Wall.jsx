import c from "./Wall.module.scss";

import { Post } from "./Post/Post";

const Wall = (props) => {
    const { posts } = props;
    const postsElement = posts.map(p => (<Post key={p.id.toString()} likes={p.likes} message={p.message} />))

    return (
        <section className={c.wall} >
            {postsElement}
        </section >
    );
};

export { Wall };