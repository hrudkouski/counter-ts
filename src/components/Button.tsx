import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    title: string
    onClickChangeValue: () => void
    disabled?: boolean
}

function Button(props: ButtonPropsType) {

    const buttonClickHandler = () => props.onClickChangeValue();

    return (
        <div>
            <span>
                <button
                    disabled={props.disabled}
                    onClick={buttonClickHandler}
                    className={s.btn}>{props.title}
                </button>
            </span>

        </div>
    );
}

export default Button;
