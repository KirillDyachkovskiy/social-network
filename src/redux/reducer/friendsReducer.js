import { usersAPI } from "../../api/api";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
export const toggleFollowSuccess = (id) => ({ type: TOGGLE_FOLLOW, id, });

const CHANGE_STATUS = 'CHANGE_STATUS';
export const changeStatus = (text) => ({ type: CHANGE_STATUS, text, });

const SET_USERS = 'SET_USERS';
export const setUsersList = (users, totalCount) => ({ type: SET_USERS, users, totalCount, });

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage, });

const CHANGE_FOLLOWING_STATUS = 'CHANGE_FOLLOWING_STATUS';
export const changeFollowingStatus = (id, isFetching) => ({ type: CHANGE_FOLLOWING_STATUS, id, isFetching });

export const toggleFollow = (id, followed) => (dispatch) => {
    dispatch(changeFollowingStatus(id, true));
    if (followed) {
        usersAPI.unfollow(id)
            .then(({ data }) => {
                if (data.resultCode === 0) {
                    dispatch(toggleFollowSuccess(id));
                    dispatch(changeFollowingStatus(id, false));
                }
            });
    } else {
        usersAPI.follow(id)
            .then(({ data }) => {
                if (data.resultCode === 0) {
                    dispatch(toggleFollowSuccess(id));
                    dispatch(changeFollowingStatus(id, false));
                }
            });
    }
};

export const changePage = (page, pageSize) => (dispatch) => {
    dispatch(setUsersList());
    dispatch(setCurrentPage(page));

    usersAPI.getCurrentPageData(page, pageSize)
        .then(({ data }) => {
            dispatch(setUsersList(data.items, data.totalCount));
        });
};

const initialState = {
    menu: [
        { id: 0, text: 'My friends' },
        { id: 1, text: 'Search' },
    ],
    users: [],
    pageSize: 4,
    totalCount: 0,
    currentPage: 1,
    followingInProgress: [],
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            followed: !item.followed,
                        }
                    } else {
                        return item
                    }
                })
            };
        case CHANGE_FOLLOWING_STATUS:
            return {
                ...state,
                followingInProgress: (action.isFetching) ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(item => item !== action.id),
            };
        case CHANGE_STATUS:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    status: action.text,
                }
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_USERS:
            return {
                ...state,
                users: (action.users) ? [...action.users] : [],
                totalCount: (action.totalCount) ? action.totalCount : state.totalCount,
            };
        default:
            return state;
    }
}