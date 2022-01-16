import { profileAPI } from "../../api/api";

const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST, text, });

const ADD_POST = 'ADD_POST';
export const addPost = () => ({ type: ADD_POST });

const SET_VISITED_USER_PROFILE = 'SET_VISITED_USER_PROFILE';
export const setVisitedUserProfile = (data) => ({ type: SET_VISITED_USER_PROFILE, data });

const SET_USER_STATUS = 'SET_USER_STATUS';
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const getVisitedUserProfile = (id) => {
    return (dispatch) => {
        profileAPI.getData(id)
            .then(({ data }) => {
                dispatch(setVisitedUserProfile({ ...data }));
            });
    }
};

export const getUserStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id)
            .then(({ data }) => {
                dispatch(setUserStatus(data));
            });
    }
}

// export const changeAuthedUserStatus = (status) => {
//     return (dispatch) => {
//         profileAPI.changeStatus(status)
//             .then(data => {
//                 dispatch(setUserStatus(status));
//             });
//     }
// };

const initialState = {
    posts: [
        { id: 0, likes: Math.ceil(Math.random() * 100), text: 'Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл' },
        { id: 1, likes: Math.ceil(Math.random() * 100), text: 'Стремитесь не к успеху, а к ценностям, которые он дает. Альберт Эйнштейн' },
        { id: 2, likes: Math.ceil(Math.random() * 100), text: 'Надо любить жизнь больше, чем смысл жизни. Фёдор Достоевский' },
        { id: 3, likes: Math.ceil(Math.random() * 100), text: 'За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан' },
    ],
    newPostText: '',
    visitedProfile: {},
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.text,
            };
        case ADD_POST:
            if (state.newPostText) {
                return {
                    ...state,
                    posts: [...state.posts, { id: state.posts.length, likes: Math.ceil(Math.random() * 100), text: state.newPostText, }],
                    newPostText: '',
                };
            } else {
                return state;
            };
        case SET_VISITED_USER_PROFILE:
            return {
                ...state,
                visitedProfile: {
                    ...action.data,
                    status: state.visitedProfile.status,
                }
            };
        case SET_USER_STATUS:
            return {
                ...state,
                visitedProfile: {
                    ...state.visitedProfile,
                    status: action.status,
                },
            };
        default:
            return state;
    }
}
