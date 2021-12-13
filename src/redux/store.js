import { messengerReducer } from "./reducer/messengerReducer";
import { profileReducer } from "./reducer/profileReducer";

class Observable {
    #observers = new Set();
    notify() {
        for (const observer of this.#observers) {
            observer()
        }
    };
    subscribe(observer) {
        this.#observers.add(observer);
    };
    unsubscribe(observer) {
        this.#observers.delete(observer);
    };
}
class Store extends Observable {
    #state = {
        ui: {
            sidebar: {
                links: [
                    { id: 0, to: "/", text: "Profile" },
                    { id: 1, to: "/messenger", text: "Messenger" },
                    { id: 2, to: "/news", text: "News" },
                    { id: 3, to: "/music", text: "Music" },
                    { id: 4, to: "/settings", text: "Settings" },
                ]
            },
        },
        pages: {
            profile: {
                posts: [
                    { id: 0, likes: Math.ceil(Math.random() * 100), text: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл" },
                    { id: 1, likes: Math.ceil(Math.random() * 100), text: "Стремитесь не к успеху, а к ценностям, которые он дает. Альберт Эйнштейн" },
                    { id: 2, likes: Math.ceil(Math.random() * 100), text: "Надо любить жизнь больше, чем смысл жизни. Фёдор Достоевский" },
                    { id: 3, likes: Math.ceil(Math.random() * 100), text: "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан" },
                ],
                newPostText: "",
            },
            messenger: {
                dialogs: [
                    { id: 0, name: "Алексей Захаров" },
                    { id: 1, name: "Петя Беляшёв" },
                    { id: 2, name: "Айсен Николаев" },
                    { id: 3, name: "Сергей Мальцев" },
                    { id: 4, name: "Николай Колесов" },
                ],
                messages: [
                    { id: 0, sender: 0, text: "Hi" },
                    { id: 1, sender: 1, text: "I'm glad to see you" },
                    { id: 2, sender: 0, text: "We'll go to the gym tomorrow" },
                ],
                newMessageText: "",
            },
        },
    };
    get state() {
        return this.#state;
    }
    set state(value) {
        this.#state = value;
    }
    dispatch(action) {
        this.state.pages.messenger = messengerReducer(this.state.pages.messenger, action);
        this.state.pages.profile = profileReducer(this.state.pages.profile, action);
        this.notify();
    }
}

export const store = new Store()
