import classNames from "./Info.module.scss";

const Info = () => {
    return (
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
                <span>https://github.com/KirillDyachkovskiy</span>
            </div>
        </section>
    );
};

export { Info };