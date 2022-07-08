import Field from '../Field';
import s from './sidebar.module.scss';

interface IPaginator {
  value: number;
  total: number;
  onChange: (newPage: number) => void;
}

function Paginator({ value, total, onChange }: IPaginator) {
  const handleChange = (newPage: number) => () => onChange(newPage);

  const pages =
    total > 1
      ? [
          1,
          ...Array.from(
            { length: 9 },
            (_, page: number) => value - 4 + page
          ).filter((page) => page > 1 && page < total),
          total,
        ]
      : [1];

  return (
    <Field>
      <ul className={s.sidebar}>
        {pages.map((currentPage) => (
          <li key={currentPage}>
            <button
              type='button'
              className={`${s.sidebar__item} ${
                currentPage === value ? s.sidebar__item_active : ''
              }`}
              onClick={handleChange(currentPage)}
            >
              {currentPage}
            </button>
          </li>
        ))}
      </ul>
    </Field>
  );
}

export default Paginator;
