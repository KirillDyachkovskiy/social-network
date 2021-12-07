import classNames from "./Notfoundpage.module.scss";

import { Content } from "./Content";

const Notfoundpage = () => {
    return (
        <section className={classNames.notfoundpage}>
            <Content />
        </section>
    );
}

export { Notfoundpage };