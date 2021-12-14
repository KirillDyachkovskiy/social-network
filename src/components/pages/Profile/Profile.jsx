import c from "./Profile.module.scss";

import { Card } from "./Card";
import { Wall } from "./Wall";

const Profile = ({ store }) => {
    return (
        <section className={c.profile}>
            <Card />
            <Wall store={store} />
        </section>
    )
};

export { Profile };