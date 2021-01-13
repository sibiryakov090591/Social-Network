import React from "react";
import {ProfileInfo} from "./profile-info/profileInfo";
import {MyPostsContainer} from "./my-posts/my-posts-container";

export const Profile:React.FC<any> = (props) => {

    const state = props.store.getState();

    return (
        <div>
            <ProfileInfo profileInfoData={state.profile.profileInfoData}/>
            <MyPostsContainer />
        </div>
    )
};
