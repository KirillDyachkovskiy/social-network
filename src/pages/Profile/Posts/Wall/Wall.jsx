import c from "./Wall.module.scss";

import { Post } from "./Post/Post";

const Wall = () => {
    let postsData = [
        { id: 1, likes: Math.ceil(Math.random() * 100), message: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл" },
        { id: 2, likes: Math.ceil(Math.random() * 100), message: "Стремитесь не к успеху, а к ценностям, которые он дает. Альберт Эйнштейн" },
        { id: 3, likes: Math.ceil(Math.random() * 100), message: "Надо любить жизнь больше, чем смысл жизни. Фёдор Достоевский" },
        { id: 4, likes: Math.ceil(Math.random() * 100), message: "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан" },
    ]

    const posts = postsData.map(p => (<Post key={p.id.toString()} likes={p.likes} message={p.message} />))

    return (
        <section className={c.wall} >
            {posts}
        </section >
    );
};

export { Wall };