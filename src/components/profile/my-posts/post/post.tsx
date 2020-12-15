import React from "react";
import styles from "./post.module.css";

type PostType = {
    message: string
    likesCount: number
}

export function Post(props: PostType) {
    return (
        <div className={styles.post_wrapper}>
            <img className={styles.avatar} src="ava.jpg" alt="avatar"/>
            <div>
                <div>
                    {props.message}
                </div>
                <div>
                    Like {props.likesCount}
                </div>
            </div>
        </div>
    )
}