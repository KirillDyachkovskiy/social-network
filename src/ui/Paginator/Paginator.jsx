import s from './paginator.module.scss'
import {Field} from "../Field";

export const Paginator = ({pagination, currentPage, changePage, pageSize}) => {
  return (
    <Field>
      <aside className={s.paginator}>
        {pagination.map(page => <span key={page} className={(page === currentPage) ? s.active : ''}
                                      onClick={() => changePage(page, pageSize)}>{page}</span>)}
      </aside>
    </Field>
  )
};
