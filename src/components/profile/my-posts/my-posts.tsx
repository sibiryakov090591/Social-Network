import React from "react";
import styles from "./my-posts.module.css";
import {Post} from "./post/post";

export function MyPosts() {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>New post</button>
                </div>
                <Post message="Hello!!!"
                      likesCount={4}
                />
                <Post message="Hi!"
                      likesCount={2}
                />
                <Post message="It`s my first post!"
                      likesCount={0}
                />
            </div>
    )
}