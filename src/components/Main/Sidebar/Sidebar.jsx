import { Link } from "react-router-dom";


import classNames from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <aside>
            <nav className={classNames.menu}>
                <ul>
                    <li className={classNames.item}>
                        <Link to="/">Profile</Link>
                    </li>
                    <li className={classNames.item}>
                        <Link to="/messenger">Messenger</Link>
                    </li>
                    <li className={classNames.item}>
                        <Link to="/news">News</Link>
                    </li>
                    <li className={classNames.item}>
                        <Link to="/music">Music</Link>
                    </li>
                    <li className={classNames.item}>
                        <Link to="/setting">Settings</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export { Sidebar };