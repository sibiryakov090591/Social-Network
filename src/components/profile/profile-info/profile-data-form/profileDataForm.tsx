import React from "react";
import styles from "../profileInfo.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {InputForm} from "../../../UI-kit/input/inputForm";
import {useDispatch} from "react-redux";
import { updateProfileInfo } from "../../../../redux/profile-reducer/profile-reducer";


const ProfileDataForm: React.FC<InjectedFormProps<any>> = (props) => {

    // Render
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={InputForm} name={"fullName"} label={"Full name"}/>
            </div>
            <div>
                <Field component={InputForm} name={"aboutMe"} label={"About me"}/>
            </div>
            <div>
                <Field component={InputForm} type={"checkbox"} name={"lookingForAJob"} label={"Looking for a job"}/>
            </div>
            <div>
                <Field component={InputForm} name={"lookingForAJobDescription"} label={"Description looking job"}/>
            </div>
            <div>
                Contacts:
                <Field component={InputForm} name={"facebook"} label={"facebook"}/>
                <Field component={InputForm} name={"github"} label={"github"}/>
                <Field component={InputForm} name={"instagram"} label={"instagram"}/>
                <Field component={InputForm} name={"mainLink"} label={"mainLink"}/>
                <Field component={InputForm} name={"twitter"} label={"twitter"}/>
                <Field component={InputForm} name={"vk"} label={"vk"}/>
                <Field component={InputForm} name={"website"} label={"website"}/>
                <Field component={InputForm} name={"youtube"} label={"youtube"}/>
            </div>
            <button>save</button>
        </form>
    )
};

// Create Redux Form
const ProfileReduxForm = reduxForm({form: "profile"})(ProfileDataForm);

type PropsType = {
    saveCallback: () => void
}

const SetProfileData: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch();

    // Submit form handler
    const submit = (dataForm: any) => {
        const correctDataToServer = {
            aboutMe: dataForm.aboutMe,
            fullName: dataForm.fullName,
            lookingForAJob: dataForm.lookingForAJob,
            lookingForAJobDescription: dataForm.lookingForAJobDescription,
            contacts: {
                facebook: dataForm.facebook,
                github: dataForm.github,
                instagram: dataForm.instagram,
                mainLink: dataForm.mainLink,
                twitter: dataForm.twitter,
                vk: dataForm.vk,
                website: dataForm.website,
                youtube: dataForm.youtube
            }
        }
        props.saveCallback()
        console.log(correctDataToServer)
        dispatch(updateProfileInfo(correctDataToServer))
    };


    // Render login form
    return (
        <div>
            <h1>Login</h1>
            <ProfileReduxForm onSubmit={submit}/>
            <button onClick={() => props.saveCallback()}>back</button>
        </div>
    )
}


export default SetProfileData;