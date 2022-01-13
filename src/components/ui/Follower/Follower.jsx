import c from './Follower.module.scss';

export const Follower = ({ onClick, id, followed, followingInProgress }) => {
    return (
        <button type='button'
            className={c.button}
            disabled={followingInProgress.some(item => item === id)}
            onClick={() => onClick(id, followed)}>
            {(followed) ? 'Unfollow' : 'Follow'}
        </button>
    )
}
