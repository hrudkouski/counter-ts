import React, {ChangeEvent} from 'react';
import s from '../App.module.css'

type SettingsDisplayPropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    title: string
    errorDisplayMax?: boolean
    errorDisplayMin?: boolean
}

export function SettingsDisplay({value, title, onChange, ...props}: SettingsDisplayPropsType) {

    const errorClass = props.errorDisplayMax || props.errorDisplayMin
        ? `${s.inputLocalError}`
        : '';

    return (
        <div>
            <span className={s.inputTitle}>{title}</span>
            <input
                className={`${s.inputLocal} ${errorClass}`}
                onChange={onChange}
                value={value}
                type="number"
            />
        </div>
    );
}




