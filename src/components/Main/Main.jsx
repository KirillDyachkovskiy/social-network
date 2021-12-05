import classNames from "./Main.module.scss";

import { Sidebar } from "./Sidebar";
import { Profile } from "./Profile";

const Main = () => {
    return (
        <main className={classNames.main}>
            <div className={classNames.container}>
                <Sidebar />
                <Profile />
            </div>
        </main>
    );
}

export { Main };