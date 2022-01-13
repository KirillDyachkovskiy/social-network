import { connect } from 'react-redux';
import { compose } from 'redux';
import { changePage } from '../../../../redux/reducer/friendsReducer';
import { PaginationStateless } from './PaginationStateless';

const mapStateToProps = (state) => ({
    pageSize: state.friends.pageSize,
    count: state.friends.totalCount,
    page: state.friends.currentPage,
});

export const Pagination = compose(
    connect(mapStateToProps, { changePage })
)(PaginationStateless);
