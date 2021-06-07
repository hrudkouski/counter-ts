import React from 'react';
import s from '../App.module.css'

type DisplayPropsType = {
    value: number
    maxValue: number
    errorIncorrect: boolean
    errorSet: boolean
}

export function Display(props: DisplayPropsType) {

    const {errorSet, errorIncorrect, value, maxValue} = props;
    const errorClass = value === maxValue ? `${s.errorValue}` : '';
    const errorIncorrectValue = errorIncorrect ? s.errorText : s.numberDisplay;

    return (
        <>
            {errorIncorrect
                ? <div className={s.display}>
                    <span className={errorIncorrectValue}>Incorrect value!</span>
                </div>
                : <div className={s.display}>
                    {!errorSet
                        ? <span className={s.errorText}>
                                Enter values and press 'set'</span>
                        : <span className={`${s.numberDisplay} ${errorClass}`}>{value}</span>}
                </div>
            }
        </>
    )
}