import c from "./Wall.module.scss";

import { Title } from "./Title";
import { SubmitPost } from "./SubmitPost";
import { Posts } from "./Posts";

const Wall = () => {
    return (
        <section className={c.wall}>
            <SubmitPost />
            <Title />
            <Posts />
        </section>
    );
}

export { Wall };