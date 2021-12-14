import c from "./Info.module.scss";

const Info = () => (
    <section className={c.info}>
        <div className={c.row}>
            <span>Birthday:</span>
            <span>July 9, 2001</span>
        </div>
        <div className={c.row}>
            <span>Current city:</span>
            <span>Moscow</span>
        </div>
        <div className={c.row}>
            <span>Education:</span>
            <span>РЭУ им. Г.В. Плеханова '23</span>
        </div>
        <div className={c.row}>
            <span>Wed-site:</span>
            <a href="https://github.com/KirillDyachkovskiy" target="_blank" rel="noreferrer">https://github.com/KirillDyachkovskiy</a>
        </div>
    </section>
);

export { Info };