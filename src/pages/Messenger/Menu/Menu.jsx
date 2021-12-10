import { NavLink } from "react-router-dom";

import c from "./Menu.module.scss";

const Menu = () => (
    <aside>
        <div className={c.menu}>
            <NavLink className={(navData) => navData.isActive ? c.active : ""} end to="/messenger/1">Алексей Шапаров</NavLink>
            <NavLink className={(navData) => navData.isActive ? c.active : ""} end to="/messenger/2">Руслан Непомнящий</NavLink>
            <NavLink className={(navData) => navData.isActive ? c.active : ""} end to="/messenger/3">Айсен Сергеев</NavLink>
            <NavLink className={(navData) => navData.isActive ? c.active : ""} end to="/messenger/4">Николай Хисамутдинов</NavLink>
            <NavLink className={(navData) => navData.isActive ? c.active : ""} end to="/messenger/5">Сергей Захаров</NavLink>
        </div>
    </aside>
);

export { Menu };