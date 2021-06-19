import React from 'react';
import s from '../App.module.css'

type ButtonPropsType = {
    title: string
    onClickChangeValue: () => void
    disabled: boolean
}

export const Button = React.memo((props: ButtonPropsType) => {
    console.log('Button');
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
})
