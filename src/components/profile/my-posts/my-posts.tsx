import React, { ChangeEvent } from "react";
import { MyPostsInfoDataType } from "../../../redux/state";
import styles from "./my-posts.module.css";
import {Post} from "./post/post";

type MyPostsType = {
    myPosts: Array<MyPostsInfoDataType>
    onChangePost: (text: string) => void
    addPost: () => void
    currentValue: string
};

export const MyPosts: React.FC<MyPostsType> = (props) => {

    // Posts from redux store
    let allPosts = props.myPosts.map(i =>
        <Post id={i.id}
              message={i.message}
              likesCount={i.likesCount}
        />);

    // Handler
    const onChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
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
