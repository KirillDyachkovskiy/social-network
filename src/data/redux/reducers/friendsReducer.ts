import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store';
import { User, UserId, UsersReq } from '../../types/Api';
import { usersService } from '../../api/Api';

const toggleFollowSuccess = (id: UserId) => ({
  type: 'friends/toggleFollow',
  id,
});

const changeFollowingStatus = (id: UserId) => ({
  type: 'friends/setFollowingStatus',
  id,
});

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
      await usersService.unsubscribeById(id);
      dispatch(toggleFollowSuccess(id));
    } else {
      await usersService.subscribeById(id);
      dispatch(toggleFollowSuccess(id));
    }
    dispatch(changeFollowingStatus(id));
  };

type FriendsState = {
  users: Array<User>;
  query: UsersReq;
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

    default:
      return state;
  }
};
