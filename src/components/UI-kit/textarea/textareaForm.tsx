import React from "react";
import style from "./textareaForm.module.css";

type InputFormType = ReturnType<typeof TextareaForm>;

export const TextareaForm: React.FC = ({input, meta, className, ...props}: any): InputFormType => {
    const isError = meta.touched && meta.error;
    return (
        <div>
            <textarea {...input} {...props} className={`${className} ${isError ? style.inputError : ""}`}/>
            { isError && <span className={style.spanError}>{meta.error}</span>}
        </div>
    )
}