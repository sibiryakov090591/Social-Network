import React from "react";
import {ActionType, ProfileType} from "../../redux/state";
import {MyPosts} from "./my-posts/my-posts";
import {ProfileInfo} from "./profile-info/profileInfo";

type PropsType = {
    profileData: ProfileType
    addMyPost: (action: ActionType) => void
    onChangeMyPost: (action: ActionType) => void
};

export const Profile:React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profileInfoData={props.profileData.profileInfoData}/>
            <MyPosts myPostsInfoData={props.profileData}
                     addMyPost={props.addMyPost}
                     onChangeMyPost={props.onChangeMyPost}/>
        </div>
    )
};
