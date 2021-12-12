const store = {
    $state: {
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
                $newPostText: "",
                /**
                 * @param {string} text
                 */
                set newPostText(text) {
                    this.$newPostText = text;
                    store.notify();
                },
                get newPostText() {
                    return this.$newPostText;
                },
                addPost() {
                    this.posts.push({ id: this.posts.length, likes: Math.ceil(Math.random() * 100), text: this.newPostText, });
                    this.$newPostText = '';
                    store.notify();
                },
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
                $newMessageText: "",
                /**
                 * @param {string} text
                 */
                set newMessageText(text) {
                    this.$newMessageText = text;
                    store.notify();
                },
                get newMessageText() {
                    return this.$newMessageText;
                },
                sendMessage() {
                    this.messages.push({ id: this.messages.length, sender: Math.round(Math.random()), text: this.newMessageText, });
                    this.$newMessageText = '';
                    store.notify();
                },
            },
        },
    },
    observers: new Set(),
    notify() {
        for (const observer of this.observers) {
            observer();
        }
    },
    register(func) {
        this.observers.add(func);
    },
}

export { store }