import {Logo} from "../../ui/Logo";
import {LoginCard} from "../../ui/LoginCard";
import {Sidebar} from "../../ui/Sidebar";
import {Outlet} from "react-router-dom";
import s from "./mainLayout.module.scss";

export const MainLayout = ({sidebar, login, authLogOut}) => {
  return (
    <section className={s.layout}>
      <header className={s.layout__header}>
        <div className={s.layout__container}>
          <Logo />
          <LoginCard login={login} authLogOut={authLogOut} />
        </div>
      </header>
      <main className={`${s.layout__main} ${s.layout__container}`}>
        <div className={s.layout__sidebar}>
          <Sidebar items={sidebar}/>
        </div>
        <div className={s.layout__content}>
          <Outlet/>
        </div>
      </main>
    </section>
  )
}
