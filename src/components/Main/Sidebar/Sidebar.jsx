import classNames from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <aside>
            <nav className={classNames.menu}>
                <ul>
                    <li className={classNames.item}>
                        <a href="/profile" className={`${classNames.link} ${classNames.active}`}>Profile</a>
                    </li>
                    <li className={classNames.item}>
                        <a href="/im" className={classNames.link}>Messenger</a>
                    </li>
                    <li className={classNames.item}>
                        <a href="/feed" className={classNames.link}>News</a>
                    </li>
                    <li className={classNames.item}>
                        <a href="/music" className={classNames.link}>Music</a>
                    </li>
                    <li className={classNames.item}>
                        <a href="/settings" className={classNames.link}>Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export { Sidebar };