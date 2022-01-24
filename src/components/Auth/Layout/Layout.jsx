import c from './Layout.module.scss';
import {Logo} from "../../ui/Logo";
import {Logout} from "../../ui/Logout";
import {Sidebar} from "./Sidebar";
import {Outlet} from "react-router-dom";

export const Layout = () => {
  return (
    <div className={c.layout}>
      <header className={c.header}>
        <div className={c.container}>
          <Logo/>
          <Logout/>
        </div>
      </header>
      <main className={c.main}>
        <div className={c.container}>
          <Sidebar/>
          <Outlet/>
        </div>
      </main>
    </div>
  )
}
