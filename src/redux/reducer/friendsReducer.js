const TOGGLE_FRIEND = 'ADD_FRIEND';
export const toggleFriend = (id) => ({ type: TOGGLE_FRIEND, id, });

const CHANGE_STATUS = 'CHANGE_STATUS';
export const changeStatus = (text) => ({ type: CHANGE_STATUS, text, });

const SET_USERS = 'SET_USERS';
export const setUsersList = (users, totalCount) => ({ type: SET_USERS, users, totalCount, });

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage, });

const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
export const toggleFetching = () => ({ type: TOGGLE_FETCHING, });

const initialState = {
    menu: [
        { id: 0, text: 'My friends' },
        { id: 1, text: 'Search' },
    ],
    users: [],
    isFetching: false,
    pageSize: 6,
    totalCount: 0,
    currentPage: 1,
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FRIEND:
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
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching,
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