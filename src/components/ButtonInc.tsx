import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    increaseCounterValue: () => void
    value: number
}

function ButtonInc(props: ButtonPropsType) {

    const buttonClickHandler = () => props.increaseCounterValue();

    return (
        <div>
            <span>
                <button
                    disabled={props.value === 5}
                    onClick={buttonClickHandler}
                    className={s.btn}>{props.title}
                </button>
            </span>

        </div>
    );
}

export default ButtonInc;
