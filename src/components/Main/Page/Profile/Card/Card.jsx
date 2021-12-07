import c from "./Card.module.scss";

import { Cover } from "./Cover";
import { Avatar } from "./Avatar";
import { Name } from "./Name";
import { Info } from "./Info";

const Card = () => (
    <section className={c.card}>
        <Cover />
        <div className={c.box}>
            <Avatar />
            <Name />
            <Info />
        </div>
    </section >
);

export { Card };