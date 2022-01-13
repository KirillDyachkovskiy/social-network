import c from './Info.module.scss';
import { Status } from '../../../../ui/Status/Status';

export const Info = ({ aboutMe, contacts }) => {
    return (
        <section className={c.info}>
            <Status>
                {aboutMe}
            </Status>
            <div>
                <span>Facebook:</span>
                <span>{contacts.facebook}</span>
            </div>
            <div>
                <span>Github:</span>
                <span>{contacts.github}</span>
            </div>
            <div>
                <span>Instagram:</span>
                <span>{contacts.instagram}</span>
            </div>
            <div>
                <span>MainLink:</span>
                <span>{contacts.mainLink}</span>
            </div>
            <div>
                <span>Twitter:</span>
                <span>{contacts.twitter}</span>
            </div>
            <div>
                <span>VK:</span>
                <span>{contacts.vk}</span>
            </div>
            <div>
                <span>Web-site:</span>
                <span>{contacts.website}</span>
            </div>
            <div>
                <span>Youtube:</span>
                <span>{contacts.youtube}</span>
            </div>
        </section>
    )
};