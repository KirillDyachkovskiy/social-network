import {createSelector} from "reselect";
import {usersAPI} from "../../api";

const TOGGLE_FOLLOW = 'friends/toggleFollow';
export const toggleFollowSuccess = (id) => ({type: TOGGLE_FOLLOW, id,});

const CHANGE_STATUS = 'friends/changeStatus';
export const changeStatus = (text) => ({type: CHANGE_STATUS, text,});

const SET_USERS = 'friends/setUsers';
const setUsersList = (users, totalCount) => ({type: SET_USERS, users, totalCount,});

const SET_CURRENT_PAGE = 'friends/setCurrentPage';
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage,});

const CHANGE_FOLLOWING_STATUS = 'friends/setFollowingStatus';
export const changeFollowingStatus = (id, isFollowing) => ({type: CHANGE_FOLLOWING_STATUS, id, isFollowing});

const CHANGE_USERS_FETCHING_STATUS = 'friends/changeUsersFetchingStatus';
export const changeUsersFetchingStatus = (isFetching) => ({type: CHANGE_USERS_FETCHING_STATUS, isFetching});

const SET_PAGES = 'friends/setPages';
export const setPages = (pages) => ({type: SET_PAGES, pages});

export const toggleFollow = (id, followed) => async (dispatch) => {
  dispatch(changeFollowingStatus(id, true));
  if (followed) {
    await usersAPI.unfollow(id);
    dispatch(toggleFollowSuccess(id));
  } else {
    await usersAPI.follow(id)
    dispatch(toggleFollowSuccess(id));
  }
  dispatch(changeFollowingStatus(id, false));
};

export const changePage = (page, pageSize) => async (dispatch) => {
  dispatch(changeUsersFetchingStatus(true));

  dispatch(setCurrentPage(page));

  const response = await usersAPI.getCurrentPageData(page, pageSize);
  dispatch(setUsersList(response.data.items, response.data.totalCount));

  const pages = [];
  for (let i = 1; i <= Math.ceil(response.data.totalCount / pageSize); i++) {
    pages.push(i)
  }
  dispatch(setPages(pages));

  dispatch(changeUsersFetchingStatus(false));
};

const initialState = {
  users: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  pages: [],
  followingInProgress: [],
  isFetching: true,
};

export const getUsers = (state) => state.friends.users;
export const getPageSize = (state) => state.friends.pageSize;
export const getTotalCount = (state) => state.friends.totalCount;
export const getCurrentPage = (state) => state.friends.currentPage;
const getPages = (state) => state.friends.pages;
export const getPagination = createSelector([getPages, getCurrentPage], (pages, currentPage) => pages.filter((item, id, arr) => item === 1 || item === arr.length || (item >= currentPage - 5) && (item <= currentPage + 5) ));
export const getFollowingInProgress = (state) => state.friends.followingInProgress;
export const getFriendsIsFetching = (state) => state.friends.isFetching;

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
        users: [...action.users],
        totalCount: action.totalCount,
      };
    default:
      return state;
  }
}