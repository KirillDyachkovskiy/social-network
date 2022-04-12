import { AnyAction } from 'redux';
import { RootState } from '../store';

export const sendMessage = (text: string) => ({
  type: 'messenger/sendMessage',
  text,
});

export type TMessage = {
  id: number;
  sender: number;
  text: string;
};

export type MessengerState = {
  messages: Array<TMessage>;
};

const initialState: MessengerState = {
  messages: [
    { id: 0, sender: 0, text: 'Hi' },
    { id: 1, sender: 1, text: "I'm glad to see you" },
    { id: 2, sender: 0, text: "We'll go to the gym tomorrow" },
  ],
};

export const getMessages = (state: RootState) => state.messenger.messages;

export const chatReducer = (
  state: MessengerState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case 'messenger/sendMessage':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            sender: Math.round(Math.random()),
            text: action.text,
          },
        ],
      };

    default:
      return state;
  }
};
