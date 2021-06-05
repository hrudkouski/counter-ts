import React from 'react';
import s from '../App.module.css'

type DisplayPropsType = {
    value: number
    maxValue: number
    errorDisplay: boolean
}

export function Display({errorDisplay, value, ...props}: DisplayPropsType) {

    const errorClass = value === props.maxValue ? `${s.errorValue}` : '';

    return (
        <div className={`${s.display} ${errorClass}`}>
            {errorDisplay
                ? <div className={s.errorText}>Incorrect value!</div>
                : <div className={s.numberDisplay}>{value}</div>}
        </div>
    );
}
