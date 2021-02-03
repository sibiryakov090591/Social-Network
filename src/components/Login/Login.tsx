import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormType = {
    email?: string
    password?: string
    rememberMe?: boolean
};

const LoginForm: React.FC<InjectedFormProps<FormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="email">email</label>
                <Field component={"input"} name={"email"}/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <Field component={"input"} name={"password"}/>
            </div>
            <div>
                <label htmlFor="rememberMe">rememberMe</label>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

export const Login: React.FC = (props) => {

    const submit = (formData: FormType) => {
        console.log(formData)
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submit}/>
        </div>
    );
};

