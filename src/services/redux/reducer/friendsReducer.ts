import { createSelector } from 'reselect';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { usersAPI } from '../../api';
import { User, UserId } from '../../../types/Api';
import { RootState } from '../store';

const TOGGLE_FOLLOW = 'friends/toggleFollow';
const toggleFollowSuccess = (id: UserId) => ({
  type: TOGGLE_FOLLOW,
  id,
});

const SET_USERS = 'friends/setUsers';
const setUsersList = (users: Array<User>, totalCount: number) => ({
  type: SET_USERS,
  users,
  totalCount,
});

const SET_CURRENT_PAGE = 'friends/setCurrentPage';
const setCurrentPage = (currentPage: number) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

const CHANGE_FOLLOWING_STATUS = 'friends/setFollowingStatus';
const changeFollowingStatus = (id: UserId, isFollowing: boolean) => ({
  type: CHANGE_FOLLOWING_STATUS,
  id,
  isFollowing,
});

const SET_PAGES = 'friends/setPages';
const setPages = (pages: Array<number>) => ({
  type: SET_PAGES,
  pages,
});

export const toggleFollow =
  (
    id: UserId,
    followed: boolean
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
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

export const changePage =
  (
    page: number,
    pageSize: number
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    dispatch(setCurrentPage(page));

    const response = await usersAPI.getCurrentPageData(page, pageSize);

    dispatch(setUsersList(response.data.items, response.data.totalCount));

    const pages = Array.from(
      Array(Math.ceil(response.data.totalCount / pageSize)),
      (_, i: number) => i + 1
    );

    dispatch(setPages(pages));
  };

type FriendsState = {
  users: Array<User>;
  pageSize: number;
  currentPage: number;
  pages: Array<number>;
  followingInProgress: Array<number>;
};

const initialState: FriendsState = {
  users: [],
  pageSize: 20,
  currentPage: 1,
  pages: [],
  followingInProgress: [],
};

export const getUsers = (state: RootState) => state.friends.users;
export const getPageSize = (state: RootState) => state.friends.pageSize;
export const getCurrentPage = (state: RootState) => state.friends.currentPage;
const getPages = (state: RootState) => state.friends.pages;

export const getPagination = createSelector(
  [getPages, getCurrentPage],
  (pages, currentPage) =>
    pages.filter(
      (page: number, id: number, arr: Array<number>) =>
        page === 1 ||
        page === arr.length ||
        (page >= currentPage - 5 && page <= currentPage + 5)
    )
);
export const getFollowingInProgress = (state: RootState) =>
  state.friends.followingInProgress;

export const friendsReducer = (
  state: FriendsState = initialState,
  action: AnyAction
): FriendsState => {
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

    case CHANGE_FOLLOWING_STATUS:
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(
              (userId: number) => userId !== action.id
            ),
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
      };

    default:
      return state;
  }
};
