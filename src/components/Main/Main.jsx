

import classNames from "./Main.module.scss";

import { Sidebar } from "./Sidebar";
import { Content } from "./Content";

const Main = () => {
    return (
        <main className={classNames.main}>
            <div className={classNames.container}>
                <Sidebar />
                <Content />
            </div>
        </main>
    );
}

export { Main };