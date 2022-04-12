import { AnyAction, Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { chatWS } from '../../api/Api';
import { RootState } from '../store';

const messagesReceived = (payload: Array<TMessage>) => ({
  type: 'chat/receiveMessages',
  payload,
});

let storedHandleMessage: ((messages: Array<TMessage>) => void) | null = null;

function handleMessage(dispatch: Dispatch) {
  if (!storedHandleMessage) {
    storedHandleMessage = (messages: Array<TMessage>) =>
      dispatch(messagesReceived(messages));
  }

  return storedHandleMessage;
}

export const startMessageListening =
  (): ThunkAction<void, RootState, undefined, AnyAction> =>
  (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    chatWS.start();
    chatWS.subscribe(handleMessage(dispatch));
  };

export const stopMessageListening =
  (): ThunkAction<void, RootState, undefined, AnyAction> =>
  (dispatch: ThunkDispatch<RootState, undefined, AnyAction>) => {
    chatWS.unsubscribe(handleMessage(dispatch));
    chatWS.stop();
  };

export const sendMessage =
  (message: string): ThunkAction<void, RootState, undefined, AnyAction> =>
  () =>
    chatWS.send(message);

export type TMessage = {
  userId: number;
  userName: string;
  photo: string;
  message: string;
};

export type MessengerState = {
  messages: Array<TMessage>;
};

const initialState: MessengerState = {
  messages: [],
};

export const getMessages = (state: RootState) => state.chat.messages;

export const chatReducer = (
  state: MessengerState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case 'chat/receiveMessages':
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };

    default:
      return state;
  }
};
