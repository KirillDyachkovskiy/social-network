import c from './Footer.module.scss';

const Footer = (props) => {
    return (
        <div className={c.footer}>
            <span>❤</span>
            <div className={c.likes}>
                {props.likes}
            </div>
        </div>
    );
};


export { Footer };