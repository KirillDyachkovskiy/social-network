import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './components/App';

const postsData = [
  { id: 1, likes: Math.ceil(Math.random() * 100), message: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл" },
  { id: 2, likes: Math.ceil(Math.random() * 100), message: "Стремитесь не к успеху, а к ценностям, которые он дает. Альберт Эйнштейн" },
  { id: 3, likes: Math.ceil(Math.random() * 100), message: "Надо любить жизнь больше, чем смысл жизни. Фёдор Достоевский" },
  { id: 4, likes: Math.ceil(Math.random() * 100), message: "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха. Майкл Джордан" },
]
const dialogsData = [
  { id: 1, name: "Алексей Захаров" },
  { id: 2, name: "Петя Беляшёв" },
  { id: 3, name: "Айсен Николаев" },
  { id: 4, name: "Сергей Мальцев" },
  { id: 5, name: "Николай Колесов" },
]
const messagesData = [
  { id: 1, sender: 1, text: "Hi" },
  { id: 2, sender: 2, text: "I'm glad to see you" },
  { id: 3, sender: 1, text: "We'll go to the gym tomorrow" },
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);
