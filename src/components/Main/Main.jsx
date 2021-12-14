import { Outlet } from "react-router-dom";

import c from "./Main.module.scss";

import { Sidebar } from './Sidebar';

const Main = () => {
    return (
        <main>
            <div className={c.container}>
                <Sidebar />
                <Outlet />
            </div>
        </main>
    )
};

export { Main };