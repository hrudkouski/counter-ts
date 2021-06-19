import React, {ChangeEvent} from 'react';
import s from '../App.module.css'

type SettingsDisplayPropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    title: string
    errorDisplayMax?: boolean
    errorDisplayMin?: boolean
}

export const DisplaySettings = React.memo((props: SettingsDisplayPropsType) => {
    console.log('DisplaySettings');
    const {value, title, onChange, errorDisplayMax, errorDisplayMin} = props;
    const errorClass = errorDisplayMax || errorDisplayMin ? `${s.inputError}` : '';

    return (
        <div>
            <span className={s.inputTitle}>{title}</span>
            <input
                className={`${s.inputSettings} ${errorClass}`}
                onChange={onChange}
                value={value}
                type="number"
            />
        </div>
    );
})




