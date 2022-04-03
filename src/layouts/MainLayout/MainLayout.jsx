import Logo from "../../ui/Logo";
import {LoginCard} from "../../components/LoginCard";
import {Sidebar} from "../../ui/Sidebar";
import {Outlet} from "react-router-dom";
import s from "./mainLayout.module.scss";
import {authLogOut, authMe, getSidebar, getUserData} from "../../services/redux/reducer/authReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {useEffect} from "react";
import Preloader from "../../ui/Preloader";

const mapStateToProps = (state) => ({
  authedUserData: getUserData(state),
  sidebar: getSidebar(state),
});

export const MainLayoutPure = ({sidebar, authedUserData, authMe, authLogOut}) => {
  useEffect(() => {
    authMe();
  }, [authMe])

  if (!authedUserData) {
    return <Preloader />
  }

  return (
    <section className={s.layout}>
      <header className={s.layout__header}>
        <div className={s.layout__container}>
          <Logo />
          <LoginCard login={authedUserData?.login} authLogOut={authLogOut} />
        </div>
      </header>
      <main className={`${s.layout__main} ${s.layout__container}`}>
        <div className={s.layout__sidebar}>
          <Sidebar items={sidebar}/>
        </div>
        <div className={s.layout__content}>
          <Outlet />
        </div>
      </main>
    </section>
  )
}

export const MainLayout = compose(
  connect(mapStateToProps, {authMe, authLogOut}),
)(MainLayoutPure);
