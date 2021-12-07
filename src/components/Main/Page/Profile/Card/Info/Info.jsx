import classNames from "./Info.module.scss";

const Info = () => (
    <section className={classNames.info}>
        <div className={classNames.row}>
            <span>Birthday:</span>
            <span>July 9, 2001</span>
        </div>
        <div className={classNames.row}>
            <span>Current city:</span>
            <span>Moscow</span>
        </div>
        <div className={classNames.row}>
            <span>Education:</span>
            <span>РЭУ им. Г.В. Плеханова '23</span>
        </div>
        <div className={classNames.row}>
            <span>Wed-site:</span>
            <a href="https://github.com/KirillDyachkovskiy">https://github.com/KirillDyachkovskiy</a>
        </div>
    </section>
);

export { Info };