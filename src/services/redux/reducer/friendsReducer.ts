import { createSelector } from 'reselect';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { usersAPI } from '../../api';
import { User, UserId } from '../../../types/Api';
import { RootState } from '../store';

const toggleFollowSuccess = (id: UserId) => ({
  type: 'friends/toggleFollow',
  id,
});
const setUsersList = (users: Array<User>, totalCount: number) => ({
  type: 'friends/setUsers',
  users,
  totalCount,
});
const setCurrentPage = (currentPage: number) => ({
  type: 'friends/setCurrentPage',
  currentPage,
});
const changeFollowingStatus = (id: UserId) => ({
  type: 'friends/setFollowingStatus',
  id,
});
const setPages = (pages: Array<number>) => ({
  type: 'friends/setPages',
  pages,
});

export const toggleFollow =
  (
    id: UserId,
    followed: boolean
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    dispatch(changeFollowingStatus(id));
    if (followed) {
      await usersAPI.unfollow(id);
      dispatch(toggleFollowSuccess(id));
    } else {
      await usersAPI.follow(id);
      dispatch(toggleFollowSuccess(id));
    }
    dispatch(changeFollowingStatus(id));
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
    case 'friends/setPages':
      return {
        ...state,
        pages: action.pages,
      };

    case 'friends/toggleFollow':
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

    case 'friends/setFollowingStatus':
      return {
        ...state,
        followingInProgress: state.followingInProgress.includes(action.id)
          ? state.followingInProgress.filter(
              (userId: number) => userId !== action.id
            )
          : [...state.followingInProgress, action.id],
      };

    case 'friends/setCurrentPage':
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case 'friends/setUsers':
      return {
        ...state,
        users: [...action.users],
      };

    default:
      return state;
  }
};
