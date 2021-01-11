import React from "react";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profile-reduser";
import {ActionType, MyPostsInfoDataType} from "../../../redux/state";
import {MyPosts} from "./my-posts";

type MyPostsType = {
    myPosts: Array<MyPostsInfoDataType>
    newPostText: string
    dispatch: (action: ActionType) => void
};

export const MyPostsContainer: React.FC<MyPostsType> = (props) => {

    // Handlers
    const addPostHandler = () => {
        if (props.newPostText) {
            props.dispatch(addPostActionCreator());
        }
    };

    const onChangePostText = (text: string) => {
        props.dispatch(updatePostActionCreator(text));
    };

    return (
        <MyPosts myPosts={props.myPosts}
                 addPost={addPostHandler}
                 onChangePost={onChangePostText}
                 currentValue={props.newPostText}
        />
    )
};
