import React from "react";
import {connect} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {
    profileActions,
    setUserProfileThunkCreator, setUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profile-reducer/profile-reducer";
import {ActionType, ProfileInfoType, ProfilePostsType} from "../../redux/my-types";
import {Profile} from "./profile";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import {ThunkDispatch} from "redux-thunk";

type PropsType = {
    profileInfo: ProfileInfoType | null
    profilePosts: ProfilePostsType[] | null
    addPost: (text: string) => void
    setUserProfile: (userId: number | string) => void
    setUserStatus: (userId: number | string) => void
    isAuth: boolean
    userId: string
    profileStatus: string
    updateUserStatus: (status: string) => void
};

class ProfileContainer extends React.Component<PropsType & RouteComponentProps<{ userId?: string }>> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.userId;
        this.props.setUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    render() {
        return (
            <Profile profileInfo={this.props.profileInfo}
                     profilePosts={this.props.profilePosts}
                     addPost={this.props.addPost}
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
        profileStatus: state.profile.profileStatus,
        userId: state.auth.id
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<GlobalStateType, {}, ActionType>) => {
    return {
        addPost: (text: string) => dispatch(profileActions.addPost(text)),
        setUserProfile: (userId: number) => dispatch(setUserProfileThunkCreator(userId)),
        setUserStatus: (userId: number) => dispatch(setUserStatusThunkCreator(userId)),
        updateUserStatus: (status: string) => dispatch(updateUserStatusThunkCreator(status))
    }
};

export default compose(withAuthRedirect, withRouter, connect(mapStateToProps, mapDispatchToProps))(ProfileContainer);;
