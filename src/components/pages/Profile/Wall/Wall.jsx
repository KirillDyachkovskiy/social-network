import c from "./Wall.module.scss";

import { Title } from "./Title";
import { SubmitPost } from "./SubmitPost";
import { Posts } from "./Posts";

const Wall = ({ store }) => {
    return (
        <section className={c.wall}>
            <SubmitPost store={store} />
            <Title />
            <Posts posts={store.getState().profile.posts} />
        </section>
    );
}

export { Wall };