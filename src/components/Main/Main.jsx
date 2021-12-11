import { NavLink, Outlet } from "react-router-dom";

import c from "./Main.module.scss";

const Main = (props) => {
    const { state } = props;

    const setActive = ({ isActive }) => (isActive) ? c.active : '';

    const links = state.links.map(l => <NavLink key={l.id.toString()} className={setActive} to={l.to}>{l.text}</NavLink>);

    return (
        <main>
            <div className={c.container}>
                <aside>
                    <nav className={c.menu}>
                        {links}
                    </nav>
                </aside>
                <Outlet />
            </div>
        </main>
    )
};

export { Main };