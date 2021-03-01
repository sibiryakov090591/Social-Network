import React from "react";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {email, maxLength, required} from "../../utils/validators/validators";
import {InputForm} from "../UI-kit/input/inputForm";
import styles from "./Login.module.css";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/redux-store";
import {login} from "../../redux/auth/auth-reducer";


type FormType = {
    email?: string
    password?: string
    rememberMe?: boolean
    captcha?: string
};


// Validator value
const maxLength40 = maxLength(40);


const LoginForm: React.FC<InjectedFormProps<FormType>> = (props) => {

    const captcha = useSelector((state: GlobalStateType) => state.auth.captcha);

    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field component={InputForm}
                   name={"email"}
                   validate={[required, maxLength40, email]}
                   label={"Email"}
            />
            <Field component={InputForm}
                   name={"password"}
                   validate={[required, maxLength40]}
                   label={"Password"}
                   type={"password"}
            />
            <Field component={InputForm}
                   name={"rememberMe"}
                   type={"checkbox"}
                   label={"Remember me"}
            />
            {
                captcha && <Field component={InputForm}
                                  name={"captcha"}
                                  label={"Captcha"}
                                  validate={[required]}
                />
            }
            {
                captcha && <div><img src={captcha} alt="captcha"/></div>
            }
            <button className={styles.btn}>Login</button>
            {
                // Show error message if login try false
                props.error && <div className={styles.commonError}>{props.error}</div>
            }
        </form>
    );
};


// Create Redux Form
const LoginReduxForm = reduxForm({form: "login"})(LoginForm);


const Login: React.FC = () => {

    // Hooks
    const isAuth = useSelector((state: GlobalStateType) => state.auth.isAuth);
    const dispatch = useDispatch();


    // Submit form handler
    const submit = (formData: FormType) => {
        const obj = {
            email: formData.email || "",
            password: formData.password || "",
            rememberMe: !!formData.rememberMe,
            captcha: formData.captcha || null
        }
        dispatch(login(obj.email, obj.password, obj.rememberMe, obj.captcha));
    };


    // Show Profile page after authentication
    if (isAuth) return <Redirect to={"/profile"}/>


    // Render login form
    return (
        <div className={styles.loginWrapper}>
            <h1 className={styles.h1}>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    )
}

export default Login;