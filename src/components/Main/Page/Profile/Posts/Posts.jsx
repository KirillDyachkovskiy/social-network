import c from "./Posts.module.scss";

import { Title } from "./Title";
import { SubmitPost } from "./SubmitPost";
import { Wall } from "./Wall";

const Posts = () => (
    <section className={c.posts}>
        <SubmitPost />
        <Title />
        <Wall />
    </section>
);

export { Posts };