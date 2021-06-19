import React, {ChangeEvent, FC} from 'react';
import s from '../App.module.css'

type SettingsDisplayPropsType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    title: string
    errorDisplayMax?: boolean
    errorDisplayMin?: boolean
}

export const DisplaySettings: FC<SettingsDisplayPropsType> = React.memo(({
                                                                             value,
                                                                             title,
                                                                             onChange,
                                                                             errorDisplayMax,
                                                                             errorDisplayMin,
                                                                         }) => {

    const errorClass = errorDisplayMax || errorDisplayMin ? `${s.inputError}` : '';

    return <div>
        <span className={s.inputTitle}>{title}</span>
        <input
            className={`${s.inputSettings} ${errorClass}`}
            onChange={onChange}
            value={value}
            type="number"
        />
    </div>
})





