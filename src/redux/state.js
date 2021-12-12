import { render } from '../render';

const state = {
    ui: {
        sidebar: {
            links: [
                { id: 1, to: "/", text: "Profile" },
                { id: 2, to: "/messenger", text: "Messenger" },
                { id: 3, to: "/news", text: "News" },
                { id: 4, to: "/music", text: "Music" },
                { id: 5, to: "/settings", text: "Settings" },
            ]
        },
    },
    pages: {
        profile: {
            posts: [
                { id: 1, likes: Math.ceil(Math.random() * 100), text: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл" },
                { id: 2, likes: Math.ceil(Math.random() * 100), text: "Стремитесь не к успеху, а к ценностям, которые он дает. Альберт Эйнштейн" },
                { id: 3, likes: Math.ceil(Math.random() * 100), text: "Надо любить жизнь больше, чем смысл жизни. Фёдор Достоевский" },
                { id: 4, likes: Math.ceil(Math.random() * 100), text: "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан" },
            ],
            newPostText: "",
            editNewPostText(text) {
                this.newPostText = text;
                render(state);
            },
            addPost() {
                this.posts.push({ id: this.posts.length + 1, likes: Math.ceil(Math.random() * 100), text: this.newPostText, });
                this.newPostText = '';
                render(state);
            },
        },
        messenger: {
            dialogs: [
                { id: 1, name: "Алексей Захаров" },
                { id: 2, name: "Петя Беляшёв" },
                { id: 3, name: "Айсен Николаев" },
                { id: 4, name: "Сергей Мальцев" },
                { id: 5, name: "Николай Колесов" },
            ],
            messages: [
                { id: 1, sender: 1, text: "Hi" },
                { id: 2, sender: 2, text: "I'm glad to see you" },
                { id: 3, sender: 1, text: "We'll go to the gym tomorrow" },
            ],
            newMessageText: "",
            editNewMessageText(text) {
                this.newMessageText = text;
                render(state);
            },
            sendMessage() {
                this.messages.push({ id: this.messages.length + 1, sender: Math.floor(Math.random() * 2), text: this.newMessageText, });
                this.newMessageText = '';
                render(state);
            },
        },
    },
}

export { state }