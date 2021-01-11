import React from "react";
import {ActionType, ProfileType} from "../../redux/state";
import {ProfileInfo} from "./profile-info/profileInfo";
import {MyPostsContainer} from "./my-posts/my-posts-container";

type PropsType = {
    profileData: ProfileType
    dispatch: (action: ActionType) => void
};

export const Profile:React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profileInfoData={props.profileData.profileInfoData}/>
            <MyPostsContainer myPosts={props.profileData.myPostsInfoData}
                     newPostText={props.profileData.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
};
