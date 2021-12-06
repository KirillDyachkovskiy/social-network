import classNames from "./Main.module.scss";

import { Sidebar } from "./Sidebar";
import { Profile } from "./Profile";
import { Messenger } from "./Messenger";

const Main = () => {
    return (
        <main className={classNames.main}>
            <div className={classNames.container}>
                <Sidebar />
                {/* <Profile /> */}
                <Messenger />
            </div>
        </main>
    );
}

export { Main };