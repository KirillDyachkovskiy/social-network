import c from "./Profile.module.scss";

import { Card } from "./Card";
import { Posts } from "./Posts";

const Profile = () => (
    <section className={c.profile}>
        <Card />
        <Posts />
    </section>
);

export { Profile };