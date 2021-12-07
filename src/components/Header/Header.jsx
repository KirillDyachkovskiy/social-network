import c from "./Header.module.scss";

import { Logo } from "./Logo";

const Header = () => (
    <header className={c.header}>
        <div className={c.container}>
            <Logo />
        </div>
    </header>
);

export { Header };