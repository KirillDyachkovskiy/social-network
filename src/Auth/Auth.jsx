import {authMe, getData, getSidebar} from '../services/redux/reducer/authReducer';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import c from "./Auth.module.scss";
import {Logo} from "../ui/Logo";
import {Logout} from "../ui/Logout";
import {Sidebar} from "../ui/Sidebar";
import {Outlet} from "react-router-dom";
import {Field} from "../ui/Field";

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

  return <div className={c.layout}>
    <header className={c.header}>
      <div className={c.container}>
        <Logo/>
        <Logout/>
      </div>
    </header>
    <main className={c.main}>
      <div className={c.container}>
        <Field>
          <Sidebar items={sidebar}/>
        </Field>
        <div className={c.content}>
          <Outlet/>
        </div>
      </div>
    </main>
  </div>
}

export const Auth = compose(
  connect(mapStateToProps, {authMe}),
)(AuthStateless);
