import { connect } from 'react-redux';
import { changePage } from '../../../../redux/reducer/friendsReducer';
import { PaginationStateless } from './PaginationStateless';

const mapStateToProps = (state) => ({
    pageSize: state.friends.pageSize,
    count: state.friends.totalCount,
    page: state.friends.currentPage,
});

export const Pagination = connect(
    mapStateToProps,
    {
        changePage,
    }
)(PaginationStateless);
