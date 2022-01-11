import c from './Status.module.scss';

export const Status = ({ text, onChange }) => {
    return (
        <div className={c.status}>
            <input type='text' className={c.input} value={text} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}
