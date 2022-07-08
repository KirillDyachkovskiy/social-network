export type TMessage = {
  userId: number;
  userName: string;
  photo: string;
  message: string;
};

type TSubscriber = (messages: Array<TMessage>) => void;

let subscribers: Array<TSubscriber> = [];

let ws: WebSocket | null = null;

function handleClose() {
  setTimeout(createChannel, 3000);
}

function createChannel() {
  cleanUp();
  ws?.close();

  ws = new WebSocket(
    'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'
  );

  ws.addEventListener('close', handleClose);
  ws.addEventListener('message', handleMessage);
}

function handleMessage(e: MessageEvent) {
  const newMessages = JSON.parse(e.data);

  subscribers.forEach((subscriber: TSubscriber) => subscriber(newMessages));
}

function cleanUp() {
  ws?.removeEventListener('close', handleClose);
  ws?.removeEventListener('message', handleMessage);
}

export const chatWS = {
  subscribe: (callback: TSubscriber) => {
    subscribers.push(callback);
  },
  unsubscribe: (callback: TSubscriber) => {
    subscribers = subscribers.filter((subscriber) => subscriber !== callback);
  },
  start: () => {
    createChannel();
  },
  stop: () => {
    subscribers = [];
    cleanUp();
    ws?.close();
  },
  send: (message: string) => {
    ws?.send(message);
  },
};
