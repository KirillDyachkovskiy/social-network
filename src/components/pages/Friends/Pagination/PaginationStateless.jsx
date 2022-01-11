import c from './Pagination.module.scss';

export const PaginationStateless = ({ totalCount, pageSize, currentPage, onPageChanged }) => {
    const getPagenation = () => {
        let pagesCount = Math.ceil(totalCount / pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return pages
    }
    return (
        <div className={c.pagination}>
            {getPagenation()
                .filter((item, id, arr) => (id === 0) || (id <= currentPage && id >= currentPage - 2) || (id === arr.length - 1))
                .map(item => <button type='button'
                    className={(currentPage === item) && c.selectedPage}
                    onClick={() => onPageChanged(item)}
                >{item}</button>)}
        </div>
    )
}
