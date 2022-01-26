const initialState = {
  links: [
    {id: 0, to: '/', text: 'Profile'},
    {id: 1, to: '/messenger', text: 'Messenger'},
    {id: 2, to: '/news', text: 'News'},
    {id: 3, to: '/music', text: 'Music'},
    {id: 4, to: '/friends', text: 'Friends'},
    {id: 5, to: '/settings', text: 'Settings'},
  ]
};

export const getLinks = (state) => state.sidebar.links;

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}