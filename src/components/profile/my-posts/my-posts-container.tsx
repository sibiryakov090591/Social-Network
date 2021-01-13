import React from "react";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profile-reduser";
import {MyPosts} from "./my-posts";
import {GlobalStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

const mapStateToProps = (state: GlobalStateType) => {
    return {
        myPosts: state.profile.myPostsInfoData,
        currentValue: state.profile.newPostText
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        onChangePost: (text: string) => dispatch(updatePostActionCreator(text))
    }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);