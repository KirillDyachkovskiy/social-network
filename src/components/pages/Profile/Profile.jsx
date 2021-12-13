import c from "./Profile.module.scss";

import { Card } from "./Card";
import { Posts } from "./Posts";

const Profile = (props) => {
    const { state, dispatch } = props;

    return (
        <section className={c.profile}>
            <Card />
            <Posts state={state} dispatch={dispatch} />
        </section>
    )
};

export { Profile };