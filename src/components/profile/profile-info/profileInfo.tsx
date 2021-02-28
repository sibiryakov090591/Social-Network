import React from "react";
import styles from "./profileInfo.module.css";
import {Preloader} from "../../UI-kit/preloader/preloader";
import {ProfileStatus} from "./profile-status/profileStatus";
import {useSelector} from "react-redux";
import {GlobalStateType} from "../../../redux/redux-store";

export const ProfileInfo: React.FC = () => {

    const profileInfo = useSelector((state: GlobalStateType) => state.profile.profileInfo);

    if (!profileInfo) return <Preloader/>

    return (
        <div className={styles.profile_wrapper}>
            <div className={styles.avatar_wrapper}>
                <img className={styles.avatar}
                     src={profileInfo.photos.large || profileInfo.photos.small || "ava.jpg"}
                     alt="avatar"
                />
            </div>

            <div className={styles.descr}>
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
