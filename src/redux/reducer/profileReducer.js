import { profileAPI } from "../../api";

const ADD_POST = 'ADD_POST';
export const addPost = (text) => ({ type: ADD_POST, text });

const SET_VISITED_USER_PROFILE = 'SET_VISITED_USER_PROFILE';
export const setVisitedUserProfile = (data) => ({ type: SET_VISITED_USER_PROFILE, data });

const SET_USER_STATUS = 'SET_USER_STATUS';
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

const CHANGE_PROFILE_FETCHING_STATUS = 'CHANGE_PROFILE_FETCHING_STATUS';
export const changeProfileFetchingStatus = (isFetching) => ({ type: CHANGE_PROFILE_FETCHING_STATUS, isFetching });

export const getVisitedUserProfile = (id) => {
  return (dispatch) => {
    dispatch(changeProfileFetchingStatus(true));
    profileAPI.getData(id)
      .then(({ data }) => {
        dispatch(setVisitedUserProfile({ ...data }));
        dispatch(changeProfileFetchingStatus(false));
      });
  }
};

export const getUserStatus = (id) => {
  return (dispatch) => {
    dispatch(changeProfileFetchingStatus(true));
    profileAPI.getStatus(id)
      .then(({ data }) => {
        dispatch(setUserStatus(data));
        dispatch(changeProfileFetchingStatus(false));
      });
  }
}

export const changeAuthedUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.changeStatus(status)
      .then(() => {
        dispatch(setUserStatus(status))
      });
  }
};

const initialState = {
  posts: [
    { id: 0, likes: Math.ceil(Math.random() * 100), text: 'Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл' },
    { id: 1, likes: Math.ceil(Math.random() * 100), text: 'Стремитесь не к успеху, а к ценностям, которые он дает. Альберт Эйнштейн' },
    { id: 2, likes: Math.ceil(Math.random() * 100), text: 'Надо любить жизнь больше, чем смысл жизни. Фёдор Достоевский' },
    { id: 3, likes: Math.ceil(Math.random() * 100), text: 'За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан' },
  ],
  visitedProfile: {},
  isFetching: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROFILE_FETCHING_STATUS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: state.posts.length, likes: Math.ceil(Math.random() * 100), text: action.text, }],

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
