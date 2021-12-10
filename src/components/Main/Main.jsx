import { NavLink, Outlet } from "react-router-dom";

import c from "./Main.module.scss";

const Main = () => {
    const setActive = ({ isActive }) => (isActive) ? c.active : '';
    return (
        <main>
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
        </main>
    )
};

export { Main };