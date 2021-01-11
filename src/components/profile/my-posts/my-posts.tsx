import React, { ChangeEvent } from "react";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profile-reduser";
import { ActionType, ProfileType } from "../../../redux/state";
import styles from "./my-posts.module.css";
import { Post } from "./post/post";

type MyPostsType = {
    myPostsInfoData: ProfileType
    addMyPost: (action: ActionType) => void
    onChangeMyPost: (action: ActionType) => void
};

export const MyPosts: React.FC<MyPostsType> = (props) => {
    let allPosts = props.myPostsInfoData.myPostsInfoData.map(i =>
        <Post id={i.id}
              message={i.message}
              likesCount={i.likesCount}
        />)

    const addPost = () => {
        if (props.myPostsInfoData.newPostText) {
            props.addMyPost(addPostActionCreator());
        }
    };

    const onChangePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.onChangeMyPost(updatePostActionCreator(text));
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>My Posts</h1>
            <div className={styles.new_post_wrapper}>
                <textarea className={styles.post_message}
                          onChange={onChangePostText}
                          value={props.myPostsInfoData.newPostText}></textarea>
                <button className={styles.post_btn}
                        onClick={addPost}>New post
                </button>
            </div>
            <div className={styles.posts_wrapper}>
                {allPosts}
            </div>
        </div>
    )
};
