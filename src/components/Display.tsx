import React from 'react';
import s from '../App.module.css'

type DisplayPropsType = {
    value: number
    maxValue: number
    errorIncorrect: boolean
    errorSet: boolean
}

export function Display({errorSet, errorIncorrect, value, ...props}: DisplayPropsType) {

    const errorClass = value === props.maxValue ? `${s.errorValue}` : '';

    return (
        <>
            {
                errorIncorrect

                    ? <div className={s.display}>
                        {errorIncorrect
                            ? <span className={errorIncorrect ? s.errorText : s.numberDisplay}>
                                Incorrect value!
                        </span>
                            : <span className={`${errorSet ? s.errorText : s.numberDisplay} ${errorClass}`}>
                                {value}
                            </span>}
                    </div>

                    : <div className={s.display}>
                        {!errorSet
                            ? <span className={s.errorText}>
                Enter values and press 'set'</span>
                            : <span className={`${s.numberDisplay} ${errorClass}`}>
            {value}</span>}
                    </div>
            }
        </>
    );
}