import c from './Status.module.scss';

export const Status = ({ children }) => {
    return (
        <div className={c.status}>
            <input type='text' className={c.input} value={children} disabled />
        </div>
    );
}
