import {Avatar} from '../../../../../ui/Avatar';
import c from './PostHeader.module.scss';

export const PostHeader = ({photo, name}) => (
  <div className={c.postHeader}>
    <Avatar src={photo} size='small'/>
    <h1 className={c.name}>{name}</h1>
    <div className={c.time}>
      вчера в 10:21
    </div>
  </div>
);
