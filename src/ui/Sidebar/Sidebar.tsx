import { NavLink } from 'react-router-dom';
import { Field } from '../Field';
import s from './sidebar.module.scss';
import { SidebarItem } from '../../services/redux/reducer/authReducer';

interface ISidebar {
  items: Array<SidebarItem>;
}

export default function Sidebar({ items }: ISidebar) {
  return (
    <Field>
      <aside className={s.sidebar}>
        {items.map((item: SidebarItem) => (
          <NavLink
            key={item.id}
            className={({ isActive }) => `${s.sidebar__item} ${(isActive) ? s.sidebar__item_active : ''}`}
            to={item.to || item.id.toString()}
          >
            {item.text}
          </NavLink>
        ))}
      </aside>
    </Field>
  );
}
