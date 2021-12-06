import classNames from "./Wall.module.scss";

import { Post } from "./Post/Post";

const Wall = () => {
    return (
        <section className={classNames.wall}>
            <Post />
            <Post />
            <Post />
        </section>
    );
}


export { Wall };