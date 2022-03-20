import s from './avatar.module.scss';
import {ANON_USER_AVATAR} from "../../constants";
import {
  changeAuthedUserAvatar
} from "../../services/redux/reducer/profileReducer";
import {connect} from "react-redux";
import {getData} from "../../services/redux/reducer/authReducer";

const mapStateToProps = (state) => ({
  authedUserId: getData(state).id,
});

export const AvatarStateless = ({src, size = 'small', authedUserId, isOwner = false, changeAuthedUserAvatar}) => {
  const setUserPhoto = (e) => {
    if (e.target.files.length) {
      changeAuthedUserAvatar(authedUserId, e.target.files[0])
    }
  }

  return (
    <div className={`${s.avatar} ${s[`avatar__${size}`]}`}>
      <img className={s.avatar__img} src={src || ANON_USER_AVATAR} alt='Аватар пользователя' />
      {isOwner &&
        <label><input type='file' onChange={(e) => setUserPhoto(e)}/>Изменить аватар</label>}
    </div>
  )
}

export const Avatar = connect(mapStateToProps, {changeAuthedUserAvatar})(AvatarStateless);
