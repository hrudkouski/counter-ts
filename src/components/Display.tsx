import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    value: number
}

function Display(props: DisplayPropsType) {

    const errorClass = props.value === 5 ? `${s.error}` : '';

    return (
        <div className={`${s.display} ${errorClass}`}>
            {props.value}
        </div>
    );
}

export default Display;
