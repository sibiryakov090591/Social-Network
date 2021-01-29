import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    addPost,
    setUserProfile,
    setUserProfileThunkCreator,
    updatePost
} from "../../redux/profile-reducer/profile-reducer";
import {ProfileInfoType, ProfilePostsType} from "../../redux/my-types";
import {Profile} from "./profile";
import axios from "axios";
import {RouteComponentProps, withRouter } from "react-router-dom";
import {profileAPI} from "../../api/api";

type PropsType = {
    profileInfo: ProfileInfoType | null
    profilePosts: ProfilePostsType[] | null
    currentPostValue: string
    addPost: () => void
    onChangePost: (text: string) => void
    setUserProfile: (userId: number | string) => void
}

class ProfileContainer extends React.Component<PropsType & RouteComponentProps<{userId?: string}>> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = "14405";
        this.props.setUserProfile(userId)
    }

    render() {
        return (
            <Profile profileInfo={this.props.profileInfo}
                     profilePosts={this.props.profilePosts}
                     currentPostValue={this.props.currentPostValue}
                     addPost={this.props.addPost}
                     onChangePost={this.props.onChangePost}
            />
        )
    }
}

const mapStateToProps = (state: GlobalStateType) => {
    return {
        profileInfo: state.profile.profileInfo,
        profilePosts: state.profile.profilePosts,
        currentPostValue: state.profile.currentPostValue
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => dispatch(addPost()),
        onChangePost: (text: string) => dispatch(updatePost(text)),
        setUserProfile: (userId: number | string) => dispatch(setUserProfileThunkCreator(userId))
    }
};

const ProfileContainerWithURLData = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithURLData);