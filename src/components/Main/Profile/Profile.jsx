import React from "react";
import Cover from "./Cover/Cover";
import Card from "./Card/Card";
import Posts from "./Posts/Posts";

class Profile extends React.Component {
    render() {
        return (
            <section className="main__profile profile">
                <Cover />
                <Card />
                <Posts />
            </section>
        );
    }
}

export default Profile;