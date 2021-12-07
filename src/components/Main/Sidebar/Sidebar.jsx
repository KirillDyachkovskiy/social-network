import { NavLink } from "react-router-dom";


import c from "./Sidebar.module.scss";

const Sidebar = () => (
    <aside>
        <nav className={c.menu}>
            <NavLink className={(navData) => navData.isActive ? c.active : ""} to="/">Profile</NavLink>
            <NavLink className={(navData) => navData.isActive ? c.active : ""} to="/messenger">Messenger</NavLink>
            <NavLink className={(navData) => navData.isActive ? c.active : ""} to="/news">News</NavLink>
            <NavLink className={(navData) => navData.isActive ? c.active : ""} to="/music">Music</NavLink>
            <NavLink className={(navData) => navData.isActive ? c.active : ""} to="/setting">Settings</NavLink>
        </nav>
    </aside>
);

export { Sidebar };