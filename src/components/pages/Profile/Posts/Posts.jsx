import c from "./Posts.module.scss";

import { Title } from "./Title";
import { SubmitPost } from "./SubmitPost";
import { Wall } from "./Wall";

const Posts = (props) => {
    const { posts } = props;
    return (
        <section className={c.posts}>
            <SubmitPost />
            <Title />
            <Wall posts={posts} />
        </section>
    );
}

export { Posts };