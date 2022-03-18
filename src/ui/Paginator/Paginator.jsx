import s from './paginator.module.scss'

export const Paginator = ({pagination, currentPage, changePage, pageSize}) => {
  return (
    <aside className={s.sidebar}>
      {pagination.map(page => <span key={page} className={(page === currentPage) ? s.active : ''}
                                    onClick={() => changePage(page, pageSize)}>{page}</span>)}
    </aside>
  )
};