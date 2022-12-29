import React from 'react';

type PropsType = {
    callBack: () => void
    color: string
    children?: React.ReactNode
}

export const SuperButton: React.FC<PropsType> = (props) => {
    const {
        callBack,
        children,
        color,
    } = props
    const onClickHandler = () => {
        callBack()
    }

    return (
        <button onClick={onClickHandler}>{"vedro"}</button>
    );
};

