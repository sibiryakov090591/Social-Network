import React from "react";
import {connect} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {
    addPost,
    setUserProfileThunkCreator, setUserStatusThunkCreator,
    updatePost,
    updateUserStatusThunkCreator
} from "../../redux/profile-reducer/profile-reducer";
import {ProfileInfoType, ProfilePostsType} from "../../redux/my-types";
import {Profile} from "./profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hok/withAuthRedirect";

type PropsType = {
    profileInfo: ProfileInfoType | null
    profilePosts: ProfilePostsType[] | null
    currentPostValue: string
    addPost: () => void
    onChangePost: (text: string) => void
    setUserProfile: (userId: number | string) => void
    setUserStatus: (userId: number | string) => void
    isAuth: boolean
    profileStatus: string
    updateUserStatus: (status: string) => void
};

class ProfileContainer extends React.Component<PropsType & RouteComponentProps<{ userId?: string }>> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = "14405";
        this.props.setUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    render() {
        return (
            <Profile profileInfo={this.props.profileInfo}
                     profilePosts={this.props.profilePosts}
                     currentPostValue={this.props.currentPostValue}
                     addPost={this.props.addPost}
                     onChangePost={this.props.onChangePost}
                     profileStatus={this.props.profileStatus}
                     updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

const mapStateToProps = (state: GlobalStateType) => {
    return {
        profileInfo: state.profile.profileInfo,
        profilePosts: state.profile.profilePosts,
        currentPostValue: state.profile.currentPostValue,
        profileStatus: state.profile.profileStatus
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => dispatch(addPost()),
        onChangePost: (text: string) => dispatch(updatePost(text)),
        setUserProfile: (userId: number | string) => dispatch(setUserProfileThunkCreator(userId)),
        setUserStatus: (userId: number | string) => dispatch(setUserStatusThunkCreator(userId)),
        updateUserStatus: (status: string) => dispatch(updateUserStatusThunkCreator(status))
    }
};

export default compose(withAuthRedirect, withRouter, connect(mapStateToProps, mapDispatchToProps))(ProfileContainer);;
