import { Outlet } from "react-router-dom";

import c from "./Main.module.scss";

import { Sidebar } from './Sidebar';

const Main = ({ store }) => {
    return (
        <main>
            <div className={c.container}>
                <Sidebar sidebar={store.getState().sidebar} />
                <Outlet />
            </div>
        </main>
    )
};

export { Main };