import c from "./Wall.module.scss";

import { Title } from "./Title";
import { SubmitPost } from "./SubmitPost";
import { Posts } from "./Posts";

export const Wall = () => {
    return (
        <section className={c.wall}>
            <SubmitPost />
            <Title>My posts</Title>
            <Posts />
        </section>
    );
}
