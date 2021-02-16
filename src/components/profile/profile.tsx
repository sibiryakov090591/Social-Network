import React from "react";
import {ProfileInfo} from "./profile-info/profileInfo";
import {MyPosts} from "./my-posts/my-posts";

export const Profile: React.FC = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
};
