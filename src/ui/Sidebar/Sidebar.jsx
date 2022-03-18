import {NavLink} from "react-router-dom";
import s from "./sidebar.module.scss";

export const Sidebar = ({items}) => {
  return (
    <aside className={s.sidebar}>
      {items.map(item => <NavLink key={item.id} className={({isActive}) => (isActive) ? s.active : ''}
                                  to={item.to ? item.to : item.id.toString()}>{item.text}</NavLink>)}
    </aside>
  )
};