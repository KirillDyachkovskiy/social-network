import c from './Card.module.scss';
import { Info } from './Info';
import { Avatar } from '../../../ui/Avatar';
import { ANON_USER_COVER } from '../../../../js/variables';

export const Card = (props) => {
    return (
        <section className={c.card}>
            <div className={c.cover}>
                <img src={ANON_USER_COVER} alt='cover' />
            </div>
            <div className={c.box}>
                <Avatar src={props.photos.large} size='large' />
                <h1 className={c.name}>{props.fullName}</h1>
                <Info contacts={props.contacts} aboutMe={props.aboutMe} />
            </div>
        </section >
    );
}
