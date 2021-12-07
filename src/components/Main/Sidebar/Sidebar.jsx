import { NavLink } from "react-router-dom";


import classNames from "./Sidebar.module.scss";

const Sidebar = () => (
    <aside>
        <nav className={classNames.menu}>
            <NavLink className={(navData) => navData.isActive ? classNames.active : ""} to="/">Profile</NavLink>
            <NavLink className={(navData) => navData.isActive ? classNames.active : ""} to="/messenger">Messenger</NavLink>
            <NavLink className={(navData) => navData.isActive ? classNames.active : ""} to="/news">News</NavLink>
            <NavLink className={(navData) => navData.isActive ? classNames.active : ""} to="/music">Music</NavLink>
            <NavLink className={(navData) => navData.isActive ? classNames.active : ""} to="/setting">Settings</NavLink>
        </nav>
    </aside>
);

export { Sidebar };