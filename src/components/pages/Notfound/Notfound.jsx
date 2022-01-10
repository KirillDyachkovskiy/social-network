import c from "./Notfound.module.scss";

import { Preloader } from '../../ui/Preloader'

const Notfound = () => (
    <section className={c.notfoundpage}>
        <div>
            Страница не найдена!
        </div>
    </section>
);

export { Notfound };