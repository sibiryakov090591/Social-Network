import React, { ChangeEvent } from "react";
import styles from "./my-posts.module.css";
import { MyPostsInfoDataType } from "../../../redux/my-types";
import { Post } from "./post/post";

type MyPostsType = {
    myPosts: Array<MyPostsInfoDataType>
    onChangePost: (text: string) => void
    addPost: () => void
    currentValue: string
};

export const MyPosts: React.FC<MyPostsType> = (props) => {

    const allPosts = props.myPosts.map(i =>
        <Post id={i.id}
              message={i.message}
              likesCount={i.likesCount}
        />);

    const onChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value;
        props.onChangePost(text);
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>My Posts</h1>
            <div className={styles.new_post_wrapper}>
                <textarea className={styles.post_message}
                          onChange={onChangePostText}
                          value={props.currentValue}>
                </textarea>
                <button className={styles.post_btn}
                        onClick={props.addPost}>
                    New post
                </button>
            </div>
            <div className={styles.posts_wrapper}>
                {allPosts}
            </div>
        </div>
    )
};
