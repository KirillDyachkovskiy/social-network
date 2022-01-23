import { usersAPI } from "../../api";

const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
export const toggleFollowSuccess = (id) => ({ type: TOGGLE_FOLLOW, id, });

const CHANGE_STATUS = 'CHANGE_STATUS';
export const changeStatus = (text) => ({ type: CHANGE_STATUS, text, });

const SET_USERS = 'SET_USERS';
export const setUsersList = (users, totalCount) => ({ type: SET_USERS, users, totalCount, });

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage, });

const CHANGE_FOLLOWING_STATUS = 'CHANGE_FOLLOWING_STATUS';
export const changeFollowingStatus = (id, isFollowing) => ({ type: CHANGE_FOLLOWING_STATUS, id, isFollowing });

const CHANGE_USERS_FETCHING_STATUS = 'CHANGE_USERS_FETCHING_STATUS';
export const changeUsersFetchingStatus = (isFetching) => ({ type: CHANGE_USERS_FETCHING_STATUS, isFetching });

const SET_PAGES = 'SET_PAGES';
export const setPages = (pages) => ({ type: SET_PAGES, pages });

export const toggleFollow = (id, followed) => (dispatch) => {
  dispatch(changeFollowingStatus(id, true));
  if (followed) {
    usersAPI.unfollow(id)
      .then(() => {
        dispatch(toggleFollowSuccess(id));
        dispatch(changeFollowingStatus(id, false));
      });
  } else {
    usersAPI.follow(id)
      .then(() => {
        dispatch(toggleFollowSuccess(id));
        dispatch(changeFollowingStatus(id, false));
      });
  }
};

export const changePage = (page, pageSize) => (dispatch) => {
  dispatch(changeUsersFetchingStatus(true));
  dispatch(setUsersList());
  dispatch(setCurrentPage(page));

  usersAPI.getCurrentPageData(page, pageSize)
    .then(({ data }) => {
      dispatch(setUsersList(data.items, data.totalCount));
      const pages = [];
      for (let i = 1; i <= Math.ceil(data.totalCount / pageSize); i++) {
        pages.push(i)
      }
      dispatch(setPages(pages));
      dispatch(changeUsersFetchingStatus(false));
    });
};

const initialState = {
  users: [],
  pageSize: 4,
  totalCount: 0,
  currentPage: 1,
  pages: [],
  followingInProgress: [],
  isFetching: false,
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGES:
      return {
        ...state,
        pages: action.pages,
      };
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
    case CHANGE_USERS_FETCHING_STATUS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case CHANGE_FOLLOWING_STATUS:
      return {
        ...state,
        followingInProgress: (action.isFollowing) ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(item => item !== action.id),
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