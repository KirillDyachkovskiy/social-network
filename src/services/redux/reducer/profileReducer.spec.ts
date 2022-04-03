import { addPost, deletePost, profileReducer } from './profileReducer';

const state = {
  posts: [
    {
      id: 0,
      likes: Math.ceil(Math.random() * 100),
      text: 'Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл',
    },
    {
      id: 1,
      likes: Math.ceil(Math.random() * 100),
      text: 'Стремитесь не к успеху, а к ценностям, которые он дает. Альберт Эйнштейн',
    },
    {
      id: 2,
      likes: Math.ceil(Math.random() * 100),
      text: 'Надо любить жизнь больше, чем смысл жизни. Фёдор Достоевский',
    },
    {
      id: 3,
      likes: Math.ceil(Math.random() * 100),
      text: 'За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан',
    },
  ],
  visitedProfile: {},
  isFetching: true,
};

it('length of posts should be incremented', () => {
  const newState = profileReducer(state, addPost('Check'));

  expect(newState.posts.length).toBe(5);
});

it('text of new post should be correct', () => {
  const newState = profileReducer(state, addPost('Check'));

  expect(newState.posts[4].text).toBe('Check');
});

it('after removal length of posts should be decrement', () => {
  const newState = profileReducer(state, deletePost(2));

  expect(newState.posts.length).toBe(3);
});

it("after removal post with incorrect id length of posts shouldn't be decrement", () => {
  const newState = profileReducer(state, deletePost(10));

  expect(newState.posts.length).toBe(4);
});
