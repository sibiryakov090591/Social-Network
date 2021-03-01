import React, { ChangeEvent } from "react";
import styles from "./profileInfo.module.css";
import {Preloader} from "../../UI-kit/preloader/preloader";
import {ProfileStatus} from "./profile-status/profileStatus";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../../redux/redux-store";
import defaultAvatar from "../../../images/ava.jpg";
import { uploadUserPhoto } from "../../../redux/profile-reducer/profile-reducer";


export const ProfileInfo: React.FC = () => {

    const profileInfo = useSelector((state: GlobalStateType) => state.profile.profileInfo);
    const isOwner = useSelector((state: GlobalStateType) => state.profile.isOwner);
    const dispatch = useDispatch();

    const uploadPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            dispatch(uploadUserPhoto(e.currentTarget.files[0]))
        }
    }

    if (!profileInfo) return <Preloader/>

    return (
        <div className={styles.profile_wrapper}>
            <div className={styles.avatar_wrapper}>
                <img className={styles.avatar}
                     src={profileInfo.photos.large || profileInfo.photos.small || defaultAvatar}
                     alt="avatar"
                />
            </div>

            <div className={styles.descr}>
                {
                    isOwner && <input onChange={uploadPhotoHandler} type="file"/>
                }
                <div className={styles.descr_item}>
                    <span className={styles.span}>Name:</span>
                    {profileInfo.fullName}
                </div>
                <div className={styles.descr_item}>
                    <span className={styles.span}>About me:</span>
                    {profileInfo.aboutMe}
                </div>
                <div className={styles.descr_item}>
                    <span className={styles.span}>Status:</span>
                    <ProfileStatus/>
                </div>
            </div>
        </div>
    )
};
