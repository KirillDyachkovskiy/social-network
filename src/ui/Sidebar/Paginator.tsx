import Field from '../Field';
import s from './sidebar.module.scss';

interface IPaginator {
  items: Array<number>;
  currentPage: number;
  changePage: (page: number) => void;
}

export default function Paginator({
  items,
  currentPage,
  changePage,
}: IPaginator) {
  return (
    <Field>
      <aside>
        <ul className={s.sidebar}>
          {items.map((page: number) => (
            <li key={page}>
              <button
                type='button'
                className={`${s.sidebar__item} ${
                  page === currentPage ? s.sidebar__item_active : ''
                }`}
                onClick={() => changePage(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </Field>
  );
}
