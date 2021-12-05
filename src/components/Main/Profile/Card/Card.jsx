import classNames from "./Card.module.scss";

import { Cover } from "./Cover";
import { Avatar } from "./Avatar";
import { Name } from "./Name";
import { Info } from "./Info";

const Card = () => {
    return (
        <section className={classNames.card}>
            <Cover />
            <div className={classNames.box}>
                <Avatar />
                <Name />
                <Info />
            </div>
        </section >
    );
};

export { Card };