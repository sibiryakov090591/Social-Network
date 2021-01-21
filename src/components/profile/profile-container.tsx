import React from "react";
import {connect} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    addPostActionCreator,
    setUserProfileActionCreator,
    updatePostActionCreator
} from "../../redux/profile-reduser/profile-reduser";
import {ProfileInfoType, ProfilePostsType} from "../../redux/my-types";
import {Profile} from "./profile";
import axios from "axios";

type PropsType = {
    profileInfo: ProfileInfoType
    profilePosts: ProfilePostsType[]
    currentPostValue: string
    addPost: () => void
    onChangePost: (text: string) => void
    setUserProfile: (profile: any) => void
}

class ProfileContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(({data}) => {
                this.props.setUserProfile(data);
            });
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
        addPost: () => dispatch(addPostActionCreator()),
        onChangePost: (text: string) => dispatch(updatePostActionCreator(text)),
        setUserProfile: (profile: any) => dispatch(setUserProfileActionCreator(profile))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);