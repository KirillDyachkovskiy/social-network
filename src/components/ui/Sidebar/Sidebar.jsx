import {NavLink} from "react-router-dom";
import c from "./Sidebar.module.scss";

export const Sidebar = ({items, currentPage, changePage, pageSize}) => {
  return (
    <aside className={c.sidebar}>
      {
        items.map(item => {
          if (item.id !== undefined) {
            return <NavLink key={item.id} className={({isActive}) => (isActive) ? c.active : ''}
                            to={item.to ? item.to : item.id.toString()}>{item.text}</NavLink>
          } else {
            return <span key={item} className={(item === currentPage) ? c.active : ''}
                         onClick={() => changePage(item, pageSize)}>{item}</span>
          }
        })
      }
    </aside>
  );
};