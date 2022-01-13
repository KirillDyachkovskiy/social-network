import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

import c from './Main.module.scss';
import { Login } from '../../pages/Login';

export const MainStateless = ({ authedUser }) => {
    debugger
    return (
        <main className={c.main}>
            <div className={c.container}>
                <Sidebar />
                {(authedUser.login) ? <Outlet /> : <Login />}
            </div>
        </main>
    )
};
