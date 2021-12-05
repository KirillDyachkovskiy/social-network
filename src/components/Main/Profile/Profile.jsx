import classNames from "./Profile.module.scss";

import { Card } from "./Card";
import { Posts } from "./Posts";

const Profile = () => {
    return (
        <section className={classNames.profile}>
            <Card />
            {/* <Posts /> */}
        </section>
    );
};

export { Profile };