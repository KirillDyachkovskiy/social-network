const TOGGLE_FRIEND = 'ADD-FRIEND';
export const toggleFriend = (id) => ({ type: TOGGLE_FRIEND, id, });

const CHANGE_STATUS = 'CHANGE-STATUS';
export const changeStatus = (text) => ({ type: CHANGE_STATUS, text, });

const SET_USERS = 'SET-USERS';
export const setUsersList = (users, totalCount) => ({ type: SET_USERS, users, totalCount, });

const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage, });

const TOGGLE_FETCHING = 'TOGGLE-FETCHING';
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
    currentUser: {
        id: 0,
        name: 'Кирилл Мохначевский',
        status: 'Samurai',
        birthday: new Date(2001, 6, 9),
        location: { city: 'Yakuts', country: 'Russia' },
        education: "РЭУ им. Г.В. Плеханова '23",
        web_site: 'https://github.com/KirillDyachkovskiy',
    },
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