import classNames from "./Messenger.module.scss";

import { Content } from "./Content";
import { Menu } from "./Menu";

const Messenger = () => (
    <section className={classNames.messenger}>
        <Content />
        <Menu />
    </section>
);

export { Messenger };