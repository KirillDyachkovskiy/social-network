import { NavLink } from "react-router-dom";

import c from "./Sidebar.module.scss";

const Sidebar = ({ sidebar }) => {

    const setActive = ({ isActive }) => (isActive) ? c.active : '';
    const links = sidebar.links.map(l => <NavLink key={l.id.toString()} className={setActive} to={l.to}>{l.text}</NavLink>);

    return (
        <aside>
            <nav className={c.menu}>
                {links}
            </nav>
        </aside>
    );
};

export { Sidebar };