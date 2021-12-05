import classNames from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <aside>
            <nav className={classNames.menu}>
                <ul>
                    <li className={classNames.item}>
                        <a href="" className={classNames.link}>Profile</a>
                    </li>
                    <li className={classNames.item}>
                        <a href="" className={classNames.link}>Message</a>
                    </li>
                    <li className={classNames.item}>
                        <a href="" className={classNames.link}>News</a>
                    </li>
                    <li className={classNames.item}>
                        <a href="" className={classNames.link}>Music</a>
                    </li>
                    <li className={classNames.item}>
                        <a href="" className={classNames.link}>Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export { Sidebar };