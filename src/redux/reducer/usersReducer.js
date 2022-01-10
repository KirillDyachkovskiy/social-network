const TOGGLE_FRIEND = "ADD-FRIEND";
export const toggleFriend_AC = (id) => ({ type: TOGGLE_FRIEND, id, });

const CHANGE_STATUS = "CHANGE-STATUS";
export const changeStatus_AC = (text) => ({ type: CHANGE_STATUS, text, });

const SET_USERS = "SET-USERS";
export const setUsersList_AC = (users, totalCount) => ({ type: SET_USERS, users, totalCount });

const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
export const setCurrentPage_AC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

const initialState = {
    menu: [
        { id: 0, text: "My friends" },
        { id: 1, text: "Search" },
    ],
    list: [],
    pageSize: 6,
    totalCount: 0,
    currentPage: 1,
    currentUser: { id: 0, name: "Кирилл Мохначевский", status: "Samurai", birthday: new Date(2001, 6, 9), location: { city: "Yakuts", country: "Russia" }, education: "РЭУ им. Г.В. Плеханова '23", web_site: "https://github.com/KirillDyachkovskiy" },
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FRIEND:
            return {
                ...state,
                list: state.list.map(item => {
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
            }
        case SET_USERS:
            return {
                ...state,
                list: [...action.users],
                totalCount: action.totalCount,
            }
        default:
            return state;
    }
}