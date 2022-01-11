import c from './Profile.module.scss';

import { Card } from './Card';
import { Wall } from './Wall';

export const Profile = () => {
    return (
        <section className={c.profile}>
            <Card />
            <Wall />
        </section>
    )
};
