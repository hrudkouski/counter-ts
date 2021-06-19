import React, {FC} from 'react';
import s from '../App.module.css'

type ButtonPropsType = {
    title: string
    onClickChangeValue: () => void
    disabled: boolean
}

export const Button: FC<ButtonPropsType> = React.memo(({
                                                           title,
                                                           disabled,
                                                           onClickChangeValue,
                                                       }) => (
        <button
            disabled={disabled}
            onClick={onClickChangeValue}
            className={s.btn}>
            {title}
        </button>
    )
)

