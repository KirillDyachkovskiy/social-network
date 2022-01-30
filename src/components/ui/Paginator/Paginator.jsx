import c from "./Paginator.module.scss";

export const Paginator = ({pagination, currentPage, changePage, pageSize}) => {
  return <aside className={c.sidebar}>
    {pagination.map(page => <span key={page} className={(page === currentPage) ? c.active : ''}
                                             onClick={() => changePage(page, pageSize)}>{page}</span>)}
  </aside>
};