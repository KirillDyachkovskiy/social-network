const UPDATE_NEW_POST = 'UPDATE_NEW_POST';
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST, text, });

const ADD_POST = 'ADD_POST';
export const addPost = () => ({ type: ADD_POST });

const CHANGE_SELECTED_PROFILE = 'CHANGE_SELECTED_PROFILE';
export const setUserProfile = (data) => ({ type: CHANGE_SELECTED_PROFILE, data });

const initialState = {
    posts: [
        { id: 0, likes: Math.ceil(Math.random() * 100), text: 'Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл' },
        { id: 1, likes: Math.ceil(Math.random() * 100), text: 'Стремитесь не к успеху, а к ценностям, которые он дает. Альберт Эйнштейн' },
        { id: 2, likes: Math.ceil(Math.random() * 100), text: 'Надо любить жизнь больше, чем смысл жизни. Фёдор Достоевский' },
        { id: 3, likes: Math.ceil(Math.random() * 100), text: 'За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан' },
    ],
    newPostText: '',
    userProfile: null,
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
        case CHANGE_SELECTED_PROFILE:
            return {
                ...state,
                userProfile: action.data,
            }
        default:
            return state;
    }
}
