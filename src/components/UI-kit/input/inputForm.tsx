import React from "react";
import style from "./inputForm.module.css";

type InputFormType = ReturnType<typeof InputForm>

export const InputForm: React.FC = ({input, label, type, meta, className, ...props}: any): InputFormType => {
    const isError = meta.touched && meta.error;
    return (
        <div className={style.wrapper}>
            <label>{label}</label>
            <input {...input}
                   {...props}
                   placeholder={label}
                   type={type}
                   className={`${style.input} ${className} ${isError ? style.inputError : ""}`}
            />
            {meta.touched
            && ((meta.error && <span className={style.spanError}>{meta.error}</span>)
                || (meta.warning && <span className={style.spanError}>{meta.warning}</span>))}
        </div>
    );
};