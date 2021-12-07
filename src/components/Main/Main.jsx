import classNames from "./Main.module.scss";

import { Sidebar } from "./Sidebar";
import { Page } from "./Page";

const Main = () => (
    <main className={classNames.main}>
        <div className={classNames.container}>
            <Sidebar />
            <Page />
        </div>
    </main>
);

export { Main };