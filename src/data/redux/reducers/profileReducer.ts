import { AnyAction } from 'redux';
import { RootState } from '../store';

export const addPost = (text: string) => ({ type: 'profile/addPost', text });
export const deletePost = (id: number) => ({
  type: 'profile/deletePost',
  id,
});

export type UserPost = {
  id: number;
  likes: number;
  text: string;
};

type ProfileState = {
  posts: UserPost[];
};

const initialState: ProfileState = {
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
      text: 'За свою карьеру я пропустил более 9000 бросков,проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан',
    },
  ],
};

export const getPosts = (state: RootState) => state.profile.posts;

export const profileReducer = (
  state: ProfileState = initialState,
  action: AnyAction
): ProfileState => {
  switch (action.type) {
    case 'profile/addPost':
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length,
            likes: Math.ceil(Math.random() * 100),
            text: action.text,
          },
        ],
      };

    case 'profile/deletePost':
      return {
        ...state,
        posts: state.posts.filter((item, id) => id !== action.id),
      };
    default:
      return state;
  }
};
