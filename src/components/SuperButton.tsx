import React from 'react';
import s from "./SuperButton.module.css"


type PropsType = {
    callBack: () => void
    color?: string
    disabled?:boolean
    children?: React.ReactNode
}

export const SuperButton: React.FC<PropsType> = (props) => {
    const {
        callBack,
        children,
        color,
        disabled,
    } = props
    const onClickHandler = () => {
        callBack()
    }

    // const finalClassName = `${s.button} ${s.default}`
    // const finalClassName = `${s.button} ${color==="red"? s.red : s.default} ${disabled ? s.disabled : ""}`
    const finalClassName = `${s.button} ${color==="red"? s.red : s.default} ${disabled ? s.disabled : ""}`

    return (
        <button onClick={onClickHandler} className={finalClassName}>{children}</button>
    );
};

