import c from './Layout.module.scss';
import {Logo} from "../ui/Logo";
import {Logout} from "../ui/Logout";
import {Sidebar} from "../ui/Sidebar";
import {Outlet} from "react-router-dom";
import {getLinks} from "../../services/redux/reducer/sidebarReducer";
import {compose} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  items: getLinks(state),
});

const LayoutStateless = ({items}) => {
  return <div className={c.layout}>
    <header className={c.header}>
      <div className={c.container}>
        <Logo/>
        <Logout/>
      </div>
    </header>
    <main className={c.main}>
      <div className={c.container}>
        <Sidebar items={items}/>
        <div className={c.content}>
          <Outlet/>
        </div>
      </div>
    </main>
  </div>
}

export const Layout = compose(
  connect(mapStateToProps)
)(LayoutStateless);

