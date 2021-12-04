import React from "react";
import Cover from "./components/Cover";
import Card from "./components/Card";
import Posts from "./components/Posts";

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