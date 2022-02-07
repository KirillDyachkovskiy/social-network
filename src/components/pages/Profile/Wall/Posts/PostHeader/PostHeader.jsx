import c from './PostHeader.module.scss';
import {Image} from "../../../../../ui/Image";
import {ANON_USER_AVATAR} from "../../../../../../constants";

export const PostHeader = ({photo, name}) => (
  <div className={c.postHeader}>
    <Image src={photo || ANON_USER_AVATAR} style={{
      width: '64px',
      height: '64px',
      borderRadius: '50%',
    gridArea: 'avatar'}}/>
    <h1 className={c.name}>{name}</h1>
    <div className={c.time}>
      вчера в 10:21
    </div>
  </div>
);
