import c from "./Wall.module.scss";

import { Post } from "./Post/Post";

const Wall = (props) => {
    const { posts } = props;
    const postsElement = posts.map(p => (<Post key={p.id.toString()} likes={p.likes} text={p.text} />))

    return (
        <section className={c.wall} >
            {postsElement.reverse()}
        </section >
    );
};

export { Wall };