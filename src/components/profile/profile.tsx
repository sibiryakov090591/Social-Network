import React from "react";
import styles from "./profile.module.css";
import {MyPosts} from "./my-posts/my-posts";

export function Profile() {
    return (
        <div>
            <div>
                ava + descr
            </div>
            <MyPosts />
        </div>
    )
}