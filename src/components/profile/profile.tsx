import React from "react";
import styles from "./profile.module.css";
import {MyPosts} from "./my-posts/my-posts";
import {ProfileInfo} from "./profile-info/profileInfo";

export function Profile() {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}