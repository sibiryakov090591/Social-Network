import React from "react";
import {ProfileInfo} from "./profile-info/profileInfo";
import {MyPosts} from "./my-posts/my-posts";
import {ProfileInfoType, ProfilePostsType} from "../../redux/my-types";

type ProfilePropsType = {
    profileInfo: ProfileInfoType
    profilePosts: ProfilePostsType[]
    currentPostValue: string
    addPost: () => void
    onChangePost: (text: string) => void
};

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <MyPosts myPosts={props.profilePosts}
                     currentValue={props.currentPostValue}
                     addPost={props.addPost}
                     onChangePost={props.onChangePost}
            />
        </div>
    )
};
