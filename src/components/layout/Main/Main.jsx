import { Outlet } from "react-router-dom";
import { Sidebar } from './Sidebar';

import c from "./Main.module.scss";

export const Main = () => {
    return (
        <main className={c.main}>
            <div className={c.container}>
                <Sidebar />
                <Outlet />
            </div>
        </main>
    )
};
