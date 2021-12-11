import c from "./Profile.module.scss";

import { Card } from "./Card";
import { Posts } from "./Posts";

const Profile = (props) => {
    const { state } = props;

    return (
        <section className={c.profile}>
            <Card />
            <Posts state={state} />
        </section>
    )
};

export { Profile };