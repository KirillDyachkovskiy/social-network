import {createSelector} from "reselect";

export const getData = (state) => state.auth.data;

export const getMenu = (state) => state.messenger.menu;
export const getMessages = (state) => state.messenger.messages;

export const getVisitedProfile = (state) => state.profile.visitedProfile;
export const getProfileIsFetching = (state) => state.profile.isFetching;
export const getPosts = (state) => state.profile.posts;

export const getUsers = (state) => state.friends.users;
export const getPageSize = (state) => state.friends.pageSize;
export const getTotalCount = (state) => state.friends.totalCount;
export const getCurrentPage = (state) => state.friends.currentPage;
const getPages = (state) => state.friends.pages;
export const getPagination = createSelector([getPages, getCurrentPage], (pages, currentPage) => pages.filter((item, id, arr) => (id === 0) || (id <= currentPage && id >= currentPage - 2) || (id === arr.length - 1)));
export const getFollowingInProgress = (state) => state.friends.followingInProgress;
export const getFriendsIsFetching = (state) => state.friends.isFetching;

export const getLinks = (state) => state.sidebar.links;
