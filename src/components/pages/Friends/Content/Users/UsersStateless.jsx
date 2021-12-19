import { User } from './User';
import c from './Users.module.scss';

export const UsersStateless = ({ users, setUsersList, onButtonClick }) => {
    debugger;
    console.log("lol");
    if (users.list.length === 1) {
        setUsersList([
            { id: 1, name: "Иван Петров", status: "c a l m", birthday: new Date(1998, 11, 12), location: { city: "Moscow", country: "Russia" }, education: "", web_site: "" },
            { id: 2, name: "Захар Гущин", status: ".", birthday: new Date(2001, 0, 19), location: { city: "Moscow", country: "Russia" }, education: "", web_site: "" },
            { id: 3, name: "Николай Савченко", status: "", birthday: new Date(2001, 7, 27), location: { city: "Saint-Petersburg", country: "Russia" }, education: "", web_site: "РЭУ им. Г.В. Плеханова '23" },
            { id: 4, name: "Алексей Петренко", status: "Гораздо легче погасить в себе свет, чем рассеять тьму вокруг", birthday: new Date(2000, 10, 4), location: { city: "Vladivostok", country: "Russia" }, education: "", web_site: "" },
            { id: 5, name: "Арсений Щербаков", status: "- Что за круги у тебя под глазами? - Пятый и шестой по Данте", birthday: new Date(2002, 1, 22), location: { city: "Sevastopol", country: "Russia" }, education: "", web_site: "" },
        ])
    }

    const list = users.list.filter(item => item.id !== users.currentUser.id).map(u => <User key={u.id} user={u} currentUser={users.currentUser} onButtonClick={onButtonClick} />);

    return (
        <div className={c.users}>
            {list}
        </div>
    )
}
