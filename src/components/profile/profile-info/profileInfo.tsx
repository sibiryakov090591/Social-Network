import React from "react";
import styles from "./profileInfo.module.css";
import {ProfileInfoType} from "../../../redux/my-types";
import {Preloader} from "../../preloader/preloader";
import { ProfileStatus } from "./profile-status/profileStatus";

type PropsType = {
    profileInfo: ProfileInfoType | null
    profileStatus: string
    updateUserStatus: (status: string) => void
};

export const ProfileInfo: React.FC<PropsType> = (props) => {

    if (!props.profileInfo) return <Preloader />

    return (
        <div className={styles.profile_wrapper}>
            <div className={styles.avatar_wrapper}>
                <img className={styles.avatar}
                     src={props.profileInfo.photos.large || props.profileInfo.photos.small || "ava.jpg"}
                     alt="avatar"
                />
            </div>

            <div className={styles.descr}>
                <div className={styles.descr_item}>
                    <span className={styles.span}>Name:</span>
                    {props.profileInfo.fullName}
                </div>
                <div className={styles.descr_item}>
                    <span className={styles.span}>About me:</span>
                    {props.profileInfo.aboutMe}
                </div>
                <div className={styles.descr_item}>
                    <span className={styles.span}>Status:</span>
                    <ProfileStatus status={props.profileStatus}
                                   updateUserStatus={props.updateUserStatus}
                    />
                </div>
            </div>
        </div>
    )
};
