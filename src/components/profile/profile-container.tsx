import React from "react";
import { connect } from "react-redux";
import { GlobalStateType } from "../../redux/redux-store";
import { Dispatch } from "redux";
import { addPostActionCreator, updatePostActionCreator } from "../../redux/profile-reduser/profile-reduser";
import { Profile } from "./profile";

const mapStateToProps = (state: GlobalStateType) => {
    return {
        profileInfoData: state.profile.profileInfoData,
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

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);