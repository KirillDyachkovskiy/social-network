import c from './Status.module.scss';

export const Status = ({ text, onInputChange }) => {
    return (<div className={c.status}>
        <input type='text' className={c.input} value={text} onChange={onInputChange} />
    </div>);
}
