import classNames from "./Header.module.scss";

import { Logo } from "./Logo";

const Header = () => {
    return (
        <header className={classNames.header}>
            <div className={classNames.container}>
                <Logo />
            </div>
        </header>
    );
};

export { Header };