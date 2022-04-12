import { createSelector } from 'reselect';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { usersAPI, User, UserId, UsersPayload } from '../../api/Api';
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

export const setQuery = (query: UsersPayload) => ({
  type: 'friends/setQuery',
  query,
});
const changeFollowingStatus = (id: UserId) => ({
  type: 'friends/setFollowingStatus',
  id,
});
const setPages = (pages: Array<number>) => ({
  type: 'friends/setPages',
  pages,
});

export const getUsers = (state: RootState) => state.friends.users;
export const getQuery = (state: RootState) => state.friends.query;
const getPages = (state: RootState) => state.friends.pages;

export const getPagination = createSelector(
  [getPages, getQuery],
  (pages, query) =>
    pages.filter(
      (page: number, id: number, arr: Array<number>) =>
        page === 1 ||
        page === arr.length ||
        (page >= query.page - 5 && page <= query.page + 5)
    )
);
export const getFollowingInProgress = (state: RootState) =>
  state.friends.followingInProgress;

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
    query: UsersPayload
  ): ThunkAction<Promise<void>, RootState, undefined, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    dispatch(
      setQuery({
        ...query,
        ...(!query.friend && { friend: null }),
      })
    );

    const response = await usersAPI.getCurrentPageData({
      ...query,
      ...(!query.friend && { friend: null }),
    });

    dispatch(setUsersList(response.data.items, response.data.totalCount));

    const pages = Array.from(
      Array(Math.ceil(response.data.totalCount / query.count)),
      (_, i: number) => i + 1
    );

    dispatch(setPages(pages));
  };

type FriendsState = {
  users: Array<User>;
  query: UsersPayload;
  pages: Array<number>;
  followingInProgress: Array<number>;
};

const initialState: FriendsState = {
  users: [],
  query: {
    count: 20,
    page: 1,
    term: '',
    friend: false,
  },
  pages: [],
  followingInProgress: [],
};

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

    case 'friends/setQuery':
      return {
        ...state,
        query: {
          ...state.query,
          ...action.query,
        },
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
