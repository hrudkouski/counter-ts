import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {Display} from "./components/Display";
import {Button} from "./components/Button";
import {SettingsDisplay} from "./components/SettingsDisplay";

export type ErrorType = {
    errorCommon: boolean
    errorMin: boolean
    errorMax: boolean
}

function App() {

    const [value, setValue] = useState<number>(0);
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(3)
    const [error, setError] = useState<ErrorType>({
        errorCommon: false,
        errorMin: false,
        errorMax: false,
    })

    useEffect(() => {
        const maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            const newMaxValueValue = JSON.parse(maxValueAsString)
            setMax(newMaxValueValue);
        }

        const minValueAsString2 = localStorage.getItem('minValue')
        if (minValueAsString2) {
            const newMinValueValue = JSON.parse(minValueAsString2)
            setMin(newMinValueValue);
        }
    }, [])

    const setSettings = () => {
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('minValue', JSON.stringify(min))
        setValue(min)
        setError({
            ...error,
            errorCommon: true,
        })
    }

    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        setError({
            ...error,
            errorCommon: false,
        })

        let minValue = e.currentTarget.valueAsNumber;

        minValue < 0 || minValue >= max
            ? setError({
                ...error,
                errorCommon: true,
                errorMin: true,
            })
            : setError({
                ...error,
                errorCommon: error.errorMax && max >= 0 ? false : error.errorMax,
                errorMin: false,
                errorMax: error.errorMax && max >= 0 ? false : error.errorMax,
            });
        setMin(minValue)
    }

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        setError({
            ...error,
            errorCommon: false,
        })

        let maxValue = e.currentTarget.valueAsNumber;

        maxValue <= 0 || maxValue <= min
            ? setError({
                ...error,
                errorCommon: true,
                errorMax: true,
            })
            : setError({
                ...error,
                errorMin: error.errorMin && min >= 0 ? false : error.errorMin,
                errorCommon: error.errorMin && min >= 0 ? false : error.errorMin,
                errorMax: false,
            })
        setMax(maxValue)
    }

    const increaseCounterValue = () => {
        setValue(value === max ? value : value + 1);
    };

    const decreaseCounterValue = () => {
        setValue(value === min ? value : value - 1);
    };

    const resetCounterValue = () => {
        setValue(min);
    };

    const disabledIncreaseButton = value === max || error.errorMin || error.errorMax;
    const disabledDecreaseButton = value === min || error.errorMin || error.errorMax;
    const displayErrorIncorrect = error.errorMin || error.errorMax

    return (
        <div className={s.app}>
            <div className={s.wrapper}>
                <div className={`${s.display} ${s.settingsDisplay}`}>
                    <SettingsDisplay
                        onChange={changeMaxValueHandler}
                        value={max}
                        title='Max Value:'
                        errorDisplayMax={error.errorMax}/>
                    <SettingsDisplay
                        onChange={changeMinValueHandler}
                        value={min}
                        title='Min Value: '
                        errorDisplayMin={error.errorMin}/>
                </div>
                <div className={s.buttons}>
                    <Button
                        title={'set'}
                        disabled={error.errorCommon}
                        onClickChangeValue={setSettings}/>
                </div>
            </div>
            <div className={s.wrapper}>
                <Display
                    errorIncorrect={displayErrorIncorrect}
                    maxValue={max}
                    value={value}
                    errorSet={error.errorCommon}/>
                <div className={s.buttons}>
                    <Button
                        disabled={disabledIncreaseButton || !error.errorCommon}
                        title={'+'}
                        onClickChangeValue={increaseCounterValue}/>
                    <Button
                        disabled={disabledDecreaseButton || !error.errorCommon}
                        title={'-'}
                        onClickChangeValue={decreaseCounterValue}/>
                    <Button
                        disabled={!error.errorCommon || displayErrorIncorrect}
                        title={'res'}
                        onClickChangeValue={resetCounterValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;

/*
1. Общие вопросы по цсс, верстке. Сто улучшить и порефакторить

2. Почему отрисовка происходит 2 раза при - это юзЭффект и локалсторадж?
    console.log('value ' + value)
    console.log('min ' + min)
    console.log('max ' + max)
    console.log(error)
*/