import {authMe, getData, getSidebar} from '../services/redux/reducer/authReducer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import c from "./Auth.module.scss";
import {Logo} from "../ui/Logo";
import {LoginCard} from "../ui/LoginCard";
import {Sidebar} from "../ui/Sidebar";
import {Outlet} from "react-router-dom";

const mapStateToProps = (state) => ({
  data: getData(state),
  sidebar: getSidebar(state),
});

const AuthStateless = ({authMe, data, sidebar}) => {
  useEffect(() => {
    authMe();
  }, [])

  if (!data) {
    return null
  }

  return (
    <div className={c.layout}>
      <header className={c.layout__header}>
        <div className={c.layout__header_container}>
          <Logo/>
          <LoginCard/>
        </div>
      </header>
      <main className={c.layout__main}>
        <div className={c.layout__main_container}>
          <Sidebar items={sidebar}/>
          <div className={c.layout__main_content}>
            <Outlet/>
          </div>
        </div>
      </main>
    </div>
  )
}

export const Auth = compose(
  connect(mapStateToProps, {authMe}),
)(AuthStateless);
