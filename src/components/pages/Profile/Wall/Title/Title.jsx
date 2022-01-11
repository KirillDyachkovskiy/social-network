import c from './Title.module.scss'

export const Title = ({ children }) => (
    <div className={c.title}>
        {children}
    </div>
);
