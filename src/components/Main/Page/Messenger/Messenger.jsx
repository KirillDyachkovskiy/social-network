import classNames from "./Messenger.module.scss";

import { Content } from "./Content";
import { Menu } from "./Menu";

const Messenger = () => {
    return (
        <section className={classNames.messenger}>
            <Content />
            <Menu />
        </section>
    );
}

export { Messenger };