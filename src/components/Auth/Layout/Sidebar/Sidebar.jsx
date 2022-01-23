import {connect} from 'react-redux';
import {compose} from 'redux';
import {NavLink} from "react-router-dom";
import c from "./Sidebar.module.scss";
import {getLinks} from "../../../../services/selectors";

const mapStateToProps = (state) => ({
  links: getLinks(state),
});

const SidebarStateless = ({links}) => {
  return (
    <aside>
      <nav className={c.menu}>
        {links.map(l => <NavLink key={l.id} className={({isActive}) => (isActive) ? c.active : ''}
                                 to={l.to}>{l.text}</NavLink>)}
      </nav>
    </aside>
  );
};

export const Sidebar = compose(
  connect(mapStateToProps)
)(SidebarStateless);
