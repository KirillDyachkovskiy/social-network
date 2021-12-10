import { NavLink, Outlet } from "react-router-dom";

import c from "./Main.module.scss";

const setActive = ({ isActive }) => (isActive) ? c.active : '';

const Main = () => (
    <main className="lol">
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
);

export { Main };