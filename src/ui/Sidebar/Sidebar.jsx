import {NavLink} from "react-router-dom";
import s from "./sidebar.module.scss";
import {Field} from "../Field";

export const Sidebar = ({paginator, items, currentPage, changePage, pageSize}) => {
  return (
    <Field>
      <aside className={s.sidebar}>
        {paginator ? items.map(page => <span key={page} className={(page === currentPage) ? s.active : ''}
                                             onClick={() => changePage(page, pageSize)}>{page}</span>)
          : items.map(item => <NavLink key={item.id} className={({isActive}) => (isActive) ? s.active : ''}
                                       to={item.to ? item.to : item.id.toString()}>{item.text}</NavLink>)}
      </aside>
    </Field>
  )
};
