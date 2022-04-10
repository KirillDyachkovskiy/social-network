import Field from '../Field';
import s from './sidebar.module.scss';

interface IPaginator {
  items: Array<number>;
  page: number;
  changePage: (page: number) => void;
}

export default function Paginator({ items, page, changePage }: IPaginator) {
  return (
    <Field>
      <aside>
        <ul className={s.sidebar}>
          {items.map((item: number) => (
            <li key={item}>
              <button
                type='button'
                className={`${s.sidebar__item} ${
                  item === page ? s.sidebar__item_active : ''
                }`}
                onClick={() => changePage(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </Field>
  );
}
