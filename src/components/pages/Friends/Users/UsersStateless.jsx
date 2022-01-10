import { User } from './User';
import c from './Users.module.scss';

export const UsersStateless = ({ props, onPageChanged }) => {
    const getList = () => {
        return props.users.map(u => <User key={u.id} user={u} onButtonClick={props.onButtonClick} />);
    }
    const getPagenation = () => {
        let pagesCount = Math.ceil(props.totalCount / props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return pages
    }
    return (
        <>
            <div className={c.pagination}>
                {getPagenation()
                    .filter((item, id, arr) => (id === 0) || (id <= props.currentPage && id >= props.currentPage - 2) || (id === arr.length - 1))
                    .map(item => <button type="button"
                        className={(props.currentPage === item) && c.selectedPage}
                        onClick={() => onPageChanged(item)}
                    >{item}</button>)}
            </div>
            <div className={c.users}>
                {getList()}
            </div>
        </>
    )
}
