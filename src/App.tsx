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
    const [min, setMin] = useState<number>(2)
    const [max, setMax] = useState<number>(10)
    const [error, setError] = useState<ErrorType>({
        errorCommon: false,
        errorMin: false,
        errorMax: false,
    })
    console.log('value - ' + value)
    console.log('min - ' + min)
    console.log('max - ' + max)
    console.log(error)

    useEffect(() => {
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMax(newValue);
        }
    }, [])

    useEffect(() => {
        let valueAsString = localStorage.getItem('minValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMin(newValue);
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

        console.log('changeMinValueHandler ' + minValue)

        minValue < 0 || minValue >= max
            ? setError({
                ...error,
                errorCommon: true,
                errorMin: true,
            })
            : setError({
                ...error,
                errorCommon: false,
                errorMin: false,
            });
        setMin(minValue)
    }

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        setError({
            ...error,
            errorCommon: false,
        })

        let maxValue = e.currentTarget.valueAsNumber;

        console.log('changeMaxValueHandler ' + maxValue)

        maxValue <= 0 || maxValue <= min
            ? setError({
                ...error,
                errorCommon: true,
                errorMax: true,
            })
            : setError({
                ...error,
                errorCommon: false,
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
                        disabled={disabledIncreaseButton}
                        title={'+'}
                        onClickChangeValue={increaseCounterValue}/>
                    <Button
                        disabled={disabledDecreaseButton}
                        title={'-'}
                        onClickChangeValue={decreaseCounterValue}/>
                    <Button
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

2.  Делаю 2 ошибки, далее мин выставляю в норм и макс выставляю в норм - висит ошибка, и горит красным инпут
2. При перезагрузке 2 отрисовки почему-то
*/