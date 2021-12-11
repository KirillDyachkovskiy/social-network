import c from "./Profile.module.scss";

import { Card } from "./Card";
import { Posts } from "./Posts";

const Profile = (props) => {
    const { state } = props;

    return (
        <section className={c.profile}>
            <Card />
            <Posts posts={state.posts} />
        </section>
    )
};

export { Profile };