import React, {ChangeEvent} from "react";
import styles from "./my-posts.module.css";
import {ProfilePostsType} from "../../../redux/my-types";
import {Post} from "./post/post";

type MyPostsType = {
    myPosts: ProfilePostsType[]
    onChangePost: (text: string) => void
    addPost: () => void
    currentValue: string
};

export const MyPosts: React.FC<MyPostsType> = (props) => {

    const allPosts = props.myPosts.map(i =>
        <Post id={i.id}
              key={i.id}
              message={i.message}
              likesCount={i.likesCount}
        />);

    const addPost = () => {
        if (props.currentValue.trim()) {
            props.addPost()
        }
    };

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
                        onClick={addPost}>
                    New post
                </button>
            </div>
            <div className={styles.posts_wrapper}>
                {allPosts}
            </div>
        </div>
    )
};
