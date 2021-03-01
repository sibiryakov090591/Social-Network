import React from "react";
import styles from "./profileDataForm.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {InputForm} from "../../../UI-kit/input/inputForm";
import {useDispatch, useSelector} from "react-redux";
import {updateProfileInfo} from "../../../../redux/profile-reducer/profile-reducer";
import {GlobalStateType} from "../../../../redux/redux-store";


const ProfileDataForm: React.FC<InjectedFormProps<any>> = (props) => {

    // Render
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field component={InputForm} name={"fullName"} label={"Full name"}/>
            <Field component={InputForm} name={"aboutMe"} label={"About me"}/>
            <Field component={InputForm} type={"checkbox"} name={"lookingForAJob"} label={"Looking for a job"}/>
            <Field component={InputForm} name={"lookingForAJobDescription"} label={"Description looking job"}/>
            <div className={styles.contacts}>
                <Field component={InputForm} name={"contacts.facebook"} label={"facebook"}/>
                <Field component={InputForm} name={"contacts.github"} label={"github"}/>
                <Field component={InputForm} name={"contacts.instagram"} label={"instagram"}/>
                <Field component={InputForm} name={"contacts.mainLink"} label={"mainLink"}/>
                <Field component={InputForm} name={"contacts.twitter"} label={"twitter"}/>
                <Field component={InputForm} name={"contacts.vk"} label={"vk"}/>
                <Field component={InputForm} name={"contacts.website"} label={"website"}/>
                <Field component={InputForm} name={"contacts.youtube"} label={"youtube"}/>
            </div>
            {
                // Show error message
                props.error && <div>{props.error}</div>
            }
            <button className={styles.btn}>Сохранить</button>
        </form>
    )
};

// Create Redux Form
const ProfileReduxForm = reduxForm({form: "profile"})(ProfileDataForm);

type PropsType = {
    saveCallback: () => void
}

const SetProfileData: React.FC<PropsType> = (props) => {

    const profileInfo = useSelector((state: GlobalStateType) => state.profile.profileInfo);
    const dispatch = useDispatch();


    // Submit form handler
    const submit = (dataForm: any) => {
        dispatch(updateProfileInfo(dataForm)).then(() => {
            props.saveCallback();
        })
    };


    // Render login form
    return (
        <div className={styles.wrapper}>
            {/*// @ts-ignore*/}
            <ProfileReduxForm initialValues={profileInfo} onSubmit={submit}/>
            <button className={styles.btn} onClick={() => props.saveCallback()}>Вернуться</button>
        </div>
    )
}


export default SetProfileData;