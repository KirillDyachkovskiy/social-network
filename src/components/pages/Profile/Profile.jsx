import c from "./Profile.module.scss";

import { Card } from "./Card";
import { Wall } from "./Wall";

const Profile = () => {
    return (
        <section className={c.profile}>
            <Card />
            <Wall />
        </section>
    )
};

export { Profile };