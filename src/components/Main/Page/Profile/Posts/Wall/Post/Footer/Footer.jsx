import classNames from "./Footer.module.scss";

const Footer = (props) => {
    return (
        <div className={classNames.footer}>
            <span>❤</span>
            <div className={classNames.likes}>
                {props.likes}
            </div>
        </div>
    );
};


export { Footer };