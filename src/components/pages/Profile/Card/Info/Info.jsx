import c from './Info.module.scss';
import { Status } from './Status/Status';

export const Info = ({ userProfile }) => {
    return (
        <section className={c.info}>
            <Status>
                {userProfile.aboutMe}
            </Status>
            <div>
                <span>Facebook:</span>
                <span>{userProfile.contacts.facebook}</span>
            </div>
            <div>
                <span>Github:</span>
                <span>{userProfile.contacts.github}</span>
            </div>
            <div>
                <span>Instagram:</span>
                <span>{userProfile.contacts.instagram}</span>
            </div>
            <div>
                <span>MainLink:</span>
                <span>{userProfile.contacts.mainLink}</span>
            </div>
            <div>
                <span>Twitter:</span>
                <span>{userProfile.contacts.twitter}</span>
            </div>
            <div>
                <span>VK:</span>
                <span>{userProfile.contacts.vk}</span>
            </div>
            <div>
                <span>Web-site:</span>
                <span>{userProfile.contacts.website}</span>
            </div>
            <div>
                <span>Youtube:</span>
                <span>{userProfile.contacts.youtube}</span>
            </div>
        </section>
    )
};