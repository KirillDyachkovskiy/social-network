import {UserCard} from "../../../UserCard";
import {memo} from "react";

export const Users = memo(({users, followingInProgress, toggleFollow}) => {
  return <div style={{display: 'grid', gap: '10px'}}>
    {users.map(u => <UserCard key={u.id}
                              user={u}
                              toggleFollow={toggleFollow}
                              followingInProgress={followingInProgress}/>)}
  </div>
})
