import { NavLink, Outlet } from "react-router-dom";

import c from "./Layout.module.scss";

const setActive = ({ isActive }) => (isActive) ? c.active : '';

const Layout = () => (
    <div className={c.container}>
        <aside>
            <nav className={c.menu}>
                <NavLink className={setActive} to="/">Profile</NavLink>
                <NavLink className={setActive} to="/messenger">Messenger</NavLink>
                <NavLink className={setActive} to="/news">News</NavLink>
                <NavLink className={setActive} to="/music">Music</NavLink>
                <NavLink className={setActive} to="/setting">Settings</NavLink>
            </nav>
        </aside>
        <Outlet />
    </div>
);

export { Layout };