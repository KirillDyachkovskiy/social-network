import { NavLink } from 'react-router-dom';
import Field from '../Field';
import s from './sidebar.module.scss';
import { SidebarItem } from '../../../data/types/Api';

interface ISidebar {
  items: SidebarItem[];
}

export default function Sidebar({ items }: ISidebar) {
  return (
    <Field>
      <aside>
        <ul className={s.sidebar}>
          {items.map((item: SidebarItem) => (
            <li key={item.id}>
              <NavLink
                className={({ isActive }) =>
                  `${s.sidebar__item} ${isActive ? s.sidebar__item_active : ''}`
                }
                to={item.to}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
    </Field>
  );
}
