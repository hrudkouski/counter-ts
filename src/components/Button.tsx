import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    onClickChangeValue: () => void
    disabled?: boolean
}

export function Button({disabled, onClickChangeValue, ...props}: ButtonPropsType) {

    const buttonClickHandler = () => onClickChangeValue();

    return <button
        disabled={disabled}
        onClick={buttonClickHandler}
        className={s.btn}>{props.title}
    </button>
}
