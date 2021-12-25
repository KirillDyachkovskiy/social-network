const TOGGLE_FRIEND = "ADD-FRIEND";
export const toggleFriend_AC = (id) => ({ type: TOGGLE_FRIEND, id, });

const CHANGE_STATUS = "CHANGE-STATUS";
export const changeStatus_AC = (text) => ({ type: CHANGE_STATUS, text, });

const SET_USERS = "SET-USERS";
export const setUsersList_AC = (users) => ({ type: SET_USERS, users });

const initialState = {
    menu: [
        { id: 0, text: "My friends" },
        { id: 1, text: "Search" },
    ],
    list: [],
    currentUser:
        { id: 0, name: "Кирилл Мохначевский", status: "Samurai", birthday: new Date(2001, 6, 9), location: { city: "Yakuts", country: "Russia" }, education: "РЭУ им. Г.В. Плеханова '23", web_site: "https://github.com/KirillDyachkovskiy" },
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
        case SET_USERS:
            return {
                ...state,
                list: [...state.list, ...action.users]
            }
        default:
            return state;
    }
}