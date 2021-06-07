import React from 'react';
import s from '../App.module.css'

type ButtonPropsType = {
    title: string
    onClickChangeValue: () => void
    disabled: boolean
}

export function Button(props: ButtonPropsType) {

    const {disabled, onClickChangeValue, title} = props;
    const buttonClickHandler = () => onClickChangeValue();

    return (
        <button
            disabled={disabled}
            onClick={buttonClickHandler}
            className={s.btn}>
            {title}
        </button>
    );
}
