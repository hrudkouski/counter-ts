import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    resetCounterValue: () => void
    value: number
}

function ButtonRes(props: ButtonPropsType) {

    const buttonClickHandler = () => props.resetCounterValue();

    return (
        <div>
            <span>
                <button
                    onClick={buttonClickHandler}
                    className={s.btn}>{props.title}
                </button>
            </span>

        </div>
    );
}

export default ButtonRes;
