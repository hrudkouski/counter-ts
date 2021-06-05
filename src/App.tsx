import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {Display} from "./components/Display";
import {Button} from "./components/Button";
import {SettingsDisplay} from "./components/SettingsDisplay";

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

    const setSettings = () => {
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('minValue', JSON.stringify(min))
        setValue(min)
    }

    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let minValue = e.currentTarget.valueAsNumber;
        setMin(minValue)
        minValue < 0 || minValue >= max ? setError(true) : setError(false);
    }

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = e.currentTarget.valueAsNumber;
        setMax(maxValue)
        maxValue < 0 || maxValue <= min ? setError(true) : setError(false)
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

    return (
        <div className={s.app}>
            <div className={s.wrapper}>
                <div className={`${s.display} ${s.settingsDisplay}`}>
                    <SettingsDisplay
                        onChange={changeMaxValueHandler}
                        value={max}
                        title='Max Value:'
                        errorDisplay={error}
                    />
                    <SettingsDisplay
                        onChange={changeMinValueHandler}
                        value={min}
                        title='Min Value: '
                        errorDisplay={error}
                    />
                </div>
                <div className={s.buttons}>
                    <Button
                        title={'set'}
                        disabled={error}
                        onClickChangeValue={setSettings}
                    />
                </div>
            </div>
            <div className={s.wrapper}>
                <Display
                    errorDisplay={error}
                    maxValue={max}
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


/*

1. Общие вопросы по верстке и CSS: что улучшить, что порефакторить.
1. Как стилизовать стрелки в инпуте, с тайпом намбер?
1. На сафари не гуд все(



2. При ошибочном значении, подсвечивать именно тот инпут, где ошибка.
2. При изменении значений макс и мин, кнопка СЕТ должна раздизейблится, а на дисплее, все кнопки задизейблить, и на дисплее написать "ентер валью и пресс сет"
2. После установки настроек и нажатия на СЕТ, кнопка сет, должна задизейблится, а на дисплее начальное значение и все кнопки раздизейблены.
2. Бага, при достижении макс значения, уменьшаем и дальше идет вверх опять,
*/