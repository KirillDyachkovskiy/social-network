const UPDATE_NEW_POST = "UPDATE-NEW-POST";
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST, text, });

const ADD_POST = "ADD-POST";
export const addPost = () => ({ type: ADD_POST });

export const profileReducer = (action, state) => {
    switch (action.type) {
        case UPDATE_NEW_POST:
            state.newPostText = action.text;
            break;
        case ADD_POST:
            state.posts.push({ id: state.posts.length, likes: Math.ceil(Math.random() * 100), text: state.newPostText, });
            state.newPostText = "";
            break;
        default:
    }
    return state;
}