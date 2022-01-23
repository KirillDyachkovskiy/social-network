import {connect} from 'react-redux';
import {compose} from 'redux';
import {NavLink} from "react-router-dom";
import c from "./Sidebar.module.scss";

const mapStateToProps = (state) => ({sidebar: state.sidebar,});

const SidebarStateless = ({sidebar}) => {
  const links = sidebar.links.map(l => <NavLink key={l.id} className={({isActive}) => (isActive) ? c.active : ''}
                                                to={l.to}>{l.text}</NavLink>);
  return (
    <aside>
      <nav className={c.menu}>
        {links}
      </nav>
    </aside>
  );
};

export const Sidebar = compose(
  connect(mapStateToProps)
)(SidebarStateless);
