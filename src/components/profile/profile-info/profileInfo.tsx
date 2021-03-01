import React, {ChangeEvent, useState} from "react";
import styles from "./profileInfo.module.css";
import {Preloader} from "../../UI-kit/preloader/preloader";
import {ProfileStatus} from "./profile-status/profileStatus";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../../redux/redux-store";
import defaultAvatar from "../../../images/ava.jpg";
import {uploadUserPhoto} from "../../../redux/profile-reducer/profile-reducer";
import SetProfileData from "./profile-data-form/profileDataForm";


export const ProfileInfo: React.FC = () => {

    // Hooks
    const profileInfo = useSelector((state: GlobalStateType) => state.profile.profileInfo);
    const profileStatus = useSelector((state: GlobalStateType) => state.profile.profileStatus);
    const isOwner = useSelector((state: GlobalStateType) => state.profile.isOwner);
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);


    // Handlers
    const uploadPhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            dispatch(uploadUserPhoto(e.currentTarget.files[0]))
        }
    }
    const editModeHandler = () => {
        setEditMode(true)
    }


    // Show preloader before initialized profile
    if (!profileInfo) return <Preloader/>


    // Map social contacts items
    let obj = {}

    for (let key in profileInfo.contacts) {
        // @ts-ignore
        if (profileInfo.contacts[key]) {
            // @ts-ignore
            obj[key] = profileInfo.contacts[key]
        }
    }

    const socialContacts = Object.keys(obj).map(key => {
        return (
            <div key={key}>
                <span className={styles.span}>{key}: </span>
                {/*// @ts-ignore*/}
                {profileInfo.contacts[key] && <a href={profileInfo.contacts[key]}>{key}</a>}
            </div>
        )
    });


    // Show update profile data component
    if (editMode) return <SetProfileData saveCallback={() => setEditMode(false)}/>


    // Render
    return (
        <div className={styles.profile_wrapper}>
            <div className={styles.avatar_wrapper}>
                <img className={styles.avatar}
                     src={profileInfo.photos.large || profileInfo.photos.small || defaultAvatar}
                     alt="avatar"
                />
                {
                    isOwner && <div className="input__wrapper">
                        <input onChange={uploadPhotoHandler} type="file" id="input__file"
                               className={styles.input_file}/>
                        <label htmlFor="input__file" className={styles.input_label}>Загрузить фото</label>
                    </div>
                }
                {
                    isOwner && <button className={styles.btn} onClick={editModeHandler}>Изменить профиль</button>
                }
            </div>

            <div className={styles.descr}>
                <div className={styles.descr_item}>
                    <span className={styles.span}>Name: </span>
                    {profileInfo.fullName}
                </div>
                <div className={styles.descr_item}>
                    <span className={styles.span}>About me: </span>
                    {profileInfo.aboutMe}
                </div>
                <div className={styles.descr_item}>
                    <span className={styles.span}>Status: </span>
                    {
                        isOwner ? <ProfileStatus/> : <span>{profileStatus}</span>
                    }
                </div>
                    {socialContacts}
            </div>
        </div>
    )
};
