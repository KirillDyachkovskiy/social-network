import classNames from "./Header.module.scss";

import { Logo } from "./Logo";

const Header = () => (
    <header className={classNames.header}>
        <div className={classNames.container}>
            <Logo />
        </div>
    </header>
);

export { Header };