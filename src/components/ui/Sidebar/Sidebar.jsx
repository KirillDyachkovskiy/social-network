import {NavLink} from "react-router-dom";
import c from "./Sidebar.module.scss";

export const Sidebar = ({items}) => {
  return (
    <aside className={c.sidebar}>
      {items.map(item => <NavLink key={item.id} className={({isActive}) => (isActive) ? c.active : ''}
                                  to={item.to ? item.to : item.id.toString()}>{item.text}</NavLink>)}
    </aside>
  )
};