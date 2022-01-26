import c from "./Users.module.scss";
import {User} from "./User";
import {memo} from "react";

export const Users = memo(({users, followingInProgress, toggleFollow}) => {
  return <div className={c.users}>
    {users.map(u => <User key={u.id}
                          user={u}
                          toggleFollow={toggleFollow}
                          followingInProgress={followingInProgress}/>)}
  </div>
})
