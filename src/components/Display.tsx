import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    value: number
    errorValue: number
    errorDisplay: boolean
}

export function Display(props: DisplayPropsType) {

    const errorClass = props.value === props.errorValue ? `${s.errorValue}` : '';

    return (
        <div className={`${s.display} ${errorClass}`}>
            {props.errorDisplay
                ? <div className={s.errorText}>Incorrect value!</div>
                : <div className={s.numberDisplay}>{props.value}</div>}
        </div>
    );
}
