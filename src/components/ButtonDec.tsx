import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    decreaseCounterValue: () => void
    value: number
}

function ButtonInc(props: ButtonPropsType) {

    const buttonClickHandler = () => props.decreaseCounterValue();

    return (
        <div>
            <button
                disabled={props.value === 0}
                onClick={buttonClickHandler}
                className={s.btn}>{props.title}
            </button>
        </div>
    );
}

export default ButtonInc;
