import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {Display} from "./components/Display";
import {Button} from "./components/Button";

function App() {

    const [value, setValue] = useState<number>(0);
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(5)
    const [error, setError] = useState<boolean>(false)

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

    const setHandler = () => {
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('minValue', JSON.stringify(min))
        setValue(min)
    }
    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber;
        setMin(value)

        if (value < 0 || value >= max) {
            setError(true)
        } else {
            setError(false)
        }
    }
    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber;
        setMax(value)

        if (value < 0 || value <= min) {
            setError(true)
        } else {
            setError(false)
        }
    }
    function increaseCounterValue() {
        setValue(value === max ? value : value + 1);
    }
    function decreaseCounterValue() {
        setValue(value === min ? value : value - 1);
    }
    function resetCounterValue() {
        setValue(min);
    }

    return (
        <div className={s.app}>
            <div className={s.wrapper}>
                <div className={s.inputDisplay}>
                    <div>
                        <span className={s.inputTitle}>Max Value: </span>
                        <input
                            className={s.inputLocal}
                            onChange={changeMaxValueHandler}
                            value={max}
                            type="number"
                        />
                    </div>
                    <div>
                        <span className={s.inputTitle}>Min Value: </span>
                        <input
                            className={s.inputLocal}
                            onChange={changeMinValueHandler}
                            value={min}
                            type="number"
                        />
                    </div>
                </div>
                <div className={s.buttons}>
                    <Button
                        title={'set'}
                        disabled={error}
                        onClickChangeValue={setHandler}
                    />
                </div>
            </div>
            <div className={s.wrapper}>
                <Display
                    errorDisplay={error}
                    errorValue={max}
                    value={value}
                />
                <div className={s.buttons}>
                    <Button
                        disabled={value === max}
                        title={'+'}
                        onClickChangeValue={increaseCounterValue}
                    />
                    <Button
                        disabled={value === min}
                        title={'-'}
                        onClickChangeValue={decreaseCounterValue}
                    />
                    <Button
                        title={'res'}
                        onClickChangeValue={resetCounterValue}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;