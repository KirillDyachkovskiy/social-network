import { AnyAction, Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { chatWS, TMessage } from '../../api/Websocket';
import { RootState } from '../store';

const messagesReceived = (Req: Array<TMessage>) => ({
  type: 'chat/receiveMessages',
  Req,
});

export const websocketStatus = (Req: boolean) => ({
  type: 'chat/websocketStatus',
  Req,
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

export type MessengerState = {
  messages: Array<TMessage>;
  isWebsocketOpen: boolean;
};

const initialState: MessengerState = {
  messages: [],
  isWebsocketOpen: false,
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
        messages: [...state.messages, ...action.Req],
      };

    case 'chat/websocketStatus':
      return {
        ...state,
        isWebsocketOpen: action.Req,
      };

    default:
      return state;
  }
};
