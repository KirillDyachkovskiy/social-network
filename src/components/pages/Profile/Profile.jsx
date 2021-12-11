import c from "./Profile.module.scss";

import { Card } from "./Card";
import { Posts } from "./Posts";

const Profile = (props) => {
    const { posts } = props;

    return (
        <section className={c.profile}>
            <Card />
            <Posts posts={posts} />
        </section>
    )
};

export { Profile };