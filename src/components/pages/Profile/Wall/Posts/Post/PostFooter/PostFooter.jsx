import c from './PostFooter.module.scss';

export const PostFooter = (props) => {
    return (
        <div className={c.postFooter}>
            <span>❤</span>
            <div className={c.likes}>
                {props.likes}
            </div>
        </div>
    );
};
