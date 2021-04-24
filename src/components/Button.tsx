import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    onClickChangeValue: () => void
    value: number
}

function Button(props: ButtonPropsType) {

    const buttonClickHandler = () => props.onClickChangeValue();
    const disabledButtonInc = props.title === '+' && props.value === 5;
    const disabledButtonDec = props.title === '-' && props.value === 0;

    return (
        <div>
            <span>
                <button
                    disabled={disabledButtonInc || disabledButtonDec}
                    onClick={buttonClickHandler}
                    className={s.btn}>{props.title}
                </button>
            </span>

        </div>
    );
}

export default Button;
