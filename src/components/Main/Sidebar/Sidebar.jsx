import { NavLink } from "react-router-dom";


import classNames from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <aside>
            <nav className={classNames.menu}>
                <NavLink to="/">Profile</NavLink>
                <NavLink to="/messenger">Messenger</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/music">Music</NavLink>
                <NavLink to="/setting">Settings</NavLink>
            </nav>
        </aside>
    );
}

export { Sidebar };