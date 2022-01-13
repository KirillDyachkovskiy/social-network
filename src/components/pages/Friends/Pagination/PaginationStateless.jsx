import c from './Pagination.module.scss';

export const PaginationStateless = ({ count, pageSize, page, changePage }) => {
    const getPagenation = () => {
        let pagesCount = Math.ceil(count / pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return pages
    }
    return (
        <div className={c.pagination}>
            {getPagenation()
                .filter((item, id, arr) => (id === 0) || (id <= page && id >= page - 2) || (id === arr.length - 1))
                .map((item, id) => <button type='button' key={id}
                    className={(page === item) ? c.selectedPage : ''}
                    onClick={() => changePage(item, pageSize)}>
                    {item}
                </button>)}
        </div>
    )
}
