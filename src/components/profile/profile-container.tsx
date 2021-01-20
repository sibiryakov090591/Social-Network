import React from "react";
import {connect} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostActionCreator, updatePostActionCreator} from "../../redux/profile-reduser/profile-reduser";
import {MyPostsInfoDataType, ProfileInfoDataType} from "../../redux/my-types";
import {Profile} from "./profile";

type PropsType = {
    profileInfoData: ProfileInfoDataType
    myPosts: Array<MyPostsInfoDataType>
    currentValue: string
    addPost: () => void
    onChangePost: (text: string) => void
}

class ProfileContainer extends React.Component<PropsType, {}> {

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);