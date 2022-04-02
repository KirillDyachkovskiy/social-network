import { createSelector } from 'reselect';
import { AnyAction } from 'redux';
import { usersAPI } from '../../api';
import { User, UserId } from '../../../types/Api';

const TOGGLE_FOLLOW = 'friends/toggleFollow';
const toggleFollowSuccess = (id: UserId): AnyAction => ({ type: TOGGLE_FOLLOW, id });

const SET_USERS = 'friends/setUsers';
const setUsersList = (users: Array<User>, totalCount: number): AnyAction => ({ type: SET_USERS, users, totalCount });

const SET_CURRENT_PAGE = 'friends/setCurrentPage';
export const setCurrentPage = (currentPage: number): AnyAction => ({ type: SET_CURRENT_PAGE, currentPage });

const CHANGE_FOLLOWING_STATUS = 'friends/setFollowingStatus';
export const changeFollowingStatus = (id: UserId, isFollowing: boolean): AnyAction => ({ type: CHANGE_FOLLOWING_STATUS, id, isFollowing });

const CHANGE_USERS_FETCHING_STATUS = 'friends/changeUsersFetchingStatus';
export const changeUsersFetchingStatus = (isFetching: boolean): AnyAction => ({ type: CHANGE_USERS_FETCHING_STATUS, isFetching });

const SET_PAGES = 'friends/setPages';
export const setPages = (pages: Array<number>): AnyAction => ({ type: SET_PAGES, pages });

export const toggleFollow = (id: UserId, followed: boolean) => async (dispatch: any) => {
  dispatch(changeFollowingStatus(id, true));
  if (followed) {
    await usersAPI.unfollow(id);
    dispatch(toggleFollowSuccess(id));
  } else {
    await usersAPI.follow(id);
    dispatch(toggleFollowSuccess(id));
  }
  dispatch(changeFollowingStatus(id, false));
};

export const changePage = (page: number, pageSize: number) => async (dispatch: any) => {
  dispatch(changeUsersFetchingStatus(true));

  dispatch(setCurrentPage(page));

  const response = await usersAPI.getCurrentPageData(page, pageSize);
  dispatch(setUsersList(response.data.items, response.data.totalCount));

  const pages = [];
  for (let i = 1; i <= Math.ceil(response.data.totalCount / pageSize); i++) {
    pages.push(i);
  }
  dispatch(setPages(pages));

  dispatch(changeUsersFetchingStatus(false));
};

type FriendsState = {
  users: Array<User>;
  pageSize: number;
  totalCount: number;
  currentPage: number;
  pages: Array<number>;
  followingInProgress: Array<number>;
  isFetching: boolean;
};

const initialState: FriendsState = {
  users: [],
  pageSize: 20,
  totalCount: 0,
  currentPage: 1,
  pages: [],
  followingInProgress: [],
  isFetching: true,
};

export const getUsers = (state: any) => state.friends.users;
export const getPageSize = (state: any) => state.friends.pageSize;
export const getTotalCount = (state: any) => state.friends.totalCount;
export const getCurrentPage = (state: any) => state.friends.currentPage;
const getPages = (state: any) => state.friends.pages;
export const getPagination = createSelector([getPages, getCurrentPage], (pages, currentPage) => pages.filter((page: number, id: number, arr: Array<number>) => page === 1 || page === arr.length || (page >= currentPage - 5 && page <= currentPage + 5)));
export const getFollowingInProgress = (state: any) => state.friends.followingInProgress;
export const getFriendsIsFetching = (state: any) => state.friends.isFetching;

export const friendsReducer = (state: FriendsState = initialState, action: AnyAction): FriendsState => {
  switch (action.type) {
    case SET_PAGES:
      return {
        ...state,
        pages: action.pages,
      };
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return {
              ...user,
              followed: !user.followed,
            };
          }
          return user;
        }),
      };
    case CHANGE_USERS_FETCHING_STATUS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case CHANGE_FOLLOWING_STATUS:
      return {
        ...state,
        followingInProgress: (action.isFollowing) ? [...state.followingInProgress, action.id] : state.followingInProgress.filter((userId: number) => userId !== action.id),
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
};
