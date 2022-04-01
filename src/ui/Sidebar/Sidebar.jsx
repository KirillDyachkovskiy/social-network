import {NavLink} from "react-router-dom";
import {Field} from "../Field";
import s from "./sidebar.module.scss";

export const Sidebar = ({type = 'sidebar', items, currentPage, changePage, pageSize}) => {
  return (
    <Field>
      <aside className={s.sidebar}>
        {type === 'paginator' ?
          items.map(page => <span
            key={page}
            className={`${s.sidebar__item} ${page === currentPage ? s.sidebar__item_active : ''}`}
            onClick={() => changePage(page, pageSize)}
          >
            {page}
          </span>)
          : items.map(item => <NavLink
            key={item.id}
            className={({isActive}) => `${s.sidebar__item} ${(isActive) ? s.sidebar__item_active : ''}`}
            to={item.to || item.id.toString()}
          >
            {item.text}
          </NavLink>)
        }
      </aside>
    </Field>
  )
};
