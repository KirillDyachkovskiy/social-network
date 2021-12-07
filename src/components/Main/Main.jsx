import c from "./Main.module.scss";

import { Sidebar } from "./Sidebar";
import { Page } from "./Page";

const Main = () => (
    <main className={c.main}>
        <div className={c.container}>
            <Sidebar />
            <Page />
        </div>
    </main>
);

export { Main };