const ADD_FRIEND = "ADD-FRIEND";
export const addFriend_ActionCreator = (id) => ({ type: ADD_FRIEND, id, });

const UNFRIEND = "UNFRIEND";
export const unfriend_ActionCreator = (id) => ({ type: UNFRIEND, id, });

const CHANGE_STATUS = "CHANGE-STATUS";
export const changeStatus_ActionCreator = (text) => ({ type: CHANGE_STATUS, text, });

const initialState = {
    menu: [
        { id: 0, text: "My friends" },
        { id: 1, text: "Search" },
    ],
    list: [
        { id: 0, name: "Кирилл Мохначевский", status: "Samurai", birthday: new Date(2001, 6, 9), location: { city: "Yakuts", country: "Russia" }, education: "РЭУ им. Г.В. Плеханова '23", web_site: "https://github.com/KirillDyachkovskiy" },
        { id: 1, name: "Иван Петров", status: "c a l m", birthday: new Date(1998, 11, 12), location: { city: "Moscow", country: "Russia" }, education: "", web_site: "" },
        { id: 2, name: "Захар Гущин", status: ".", birthday: new Date(2001, 0, 19), location: { city: "Moscow", country: "Russia" }, education: "", web_site: "" },
        { id: 3, name: "Николай Савченко", status: "", birthday: new Date(2001, 7, 27), location: { city: "Saint-Petersburg", country: "Russia" }, education: "", web_site: "РЭУ им. Г.В. Плеханова '23" },
        { id: 4, name: "Алексей Петренко", status: "Гораздо легче погасить в себе свет, чем рассеять тьму вокруг", birthday: new Date(2000, 10, 4), location: { city: "Vladivostok", country: "Russia" }, education: "", web_site: "" },
        { id: 5, name: "Арсений Щербаков", status: "- Что за круги у тебя под глазами? - Пятый и шестой по Данте", birthday: new Date(2002, 1, 22), location: { city: "Sevastopol", country: "Russia" }, education: "", web_site: "" },
    ],
    currentUser: {
        id: 0,
        friends: [2, 3, 4],
    },
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
            };
        case UNFRIEND:
            return {
                ...state,
            };
        case CHANGE_STATUS:
            return {
                ...state,
                list: [...state.list].map(item => {
                    if (item.id === state.currentUser.id) {
                        return { ...item, status: action.text, }
                    }
                    return item
                }),
            }
        default:
            return state;
    }
}