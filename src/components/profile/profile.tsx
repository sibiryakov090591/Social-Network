import React from "react";
import {ProfileInfo} from "./profile-info/profileInfo";
import {MyPosts} from "./my-posts/my-posts";
import {MyPostsInfoDataType, ProfileInfoDataType} from "../../redux/state";

type ProfilePropsType = {
    profileInfoData: ProfileInfoDataType
    myPosts: Array<MyPostsInfoDataType>
    currentValue: string
    addPost: () => void
    onChangePost: (text: string) => void
};

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profileInfoData={props.profileInfoData}/>
            <MyPosts myPosts={props.myPosts}
                     currentValue={props.currentValue}
                     addPost={props.addPost}
                     onChangePost={props.onChangePost}
            />
        </div>
    )
};
