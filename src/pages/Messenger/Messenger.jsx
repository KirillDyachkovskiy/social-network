import c from "./Messenger.module.scss";

import { Content } from "./Content";
import { Menu } from "./Menu";

const Messenger = () => (
    <section className={c.messenger}>
        <Content />
        <Menu />
    </section>
);

export { Messenger };