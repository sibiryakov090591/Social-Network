import React from "react";
import styles from "./my-posts.module.css";
import {Post} from "./post/post";

type DataBaseType = {
    id: number
    message: string
    likesCount: number
}

export function MyPosts() {

    let dataBase: Array<DataBaseType> = [
        {
            id: 1,
            message: "When we were last in South Africa, I used the most amazing toilet ever (we saw other stuff, too, like penguins and spring bok and geckos. And yet, this post is about toilets",
            likesCount: 4
        },
        {
            id: 2,
            message: "Though my wife and I have been together for 13 and a half years, and the secrets between us are few",
            likesCount: 2
        },
        {id: 3, message: "I need to sleep...", likesCount: 0}
    ]

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>My Posts</h1>
            <div className={styles.new_post_wrapper}>
                <textarea className={styles.post_message}></textarea>
                <button className={styles.post_btn}>New post</button>
            </div>
            <div className={styles.posts_wrapper}>
                {
                    dataBase.reverse().map(i =>
                        <Post id={i.id}
                              message={i.message}
                              likesCount={i.likesCount}
                        />)
                }
            </div>
        </div>
    )
}