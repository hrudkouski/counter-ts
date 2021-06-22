import React, {ChangeEvent, useCallback} from 'react';
import s from './App.module.css';
import {Display} from "./components/Display";
import {Button} from "./components/Button";
import {DisplaySettings} from "./components/DisplaySettings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {
    changeMaxValueAC, changeMinValueAC,
    decreaseCounterValueAC, ErrorType,
    increaseCounterValueAC,
    resetCounterValueAC, setErrorCommonAC,
    setSettingsAC
} from "./redux/counter-reducer";

function App() {

    const value = useSelector<AppRootStateType, number>(state => state.counter.value);
    const min = useSelector<AppRootStateType, number>(state => state.counter.min);
    const max = useSelector<AppRootStateType, number>(state => state.counter.max);
    const error = useSelector<AppRootStateType, ErrorType>(state => state.counter.error);

    const dispatch = useDispatch();

    const disabledIncreaseButton = value === max || error.errorMin || error.errorMax;
    const disabledDecreaseButton = value === min || error.errorMin || error.errorMax;
    const displayErrorIncorrect = error.errorMin || error.errorMax;

    const changeMinValueHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setErrorCommonAC());
        dispatch(changeMinValueAC(e.currentTarget.valueAsNumber))
    }, [dispatch])

    const changeMaxValueHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setErrorCommonAC());
        dispatch(changeMaxValueAC(e.currentTarget.valueAsNumber));
    }, [dispatch])

    const setSettings = useCallback(() => {
        dispatch(setSettingsAC())
    }, [dispatch]);

    const increaseCounterValue = useCallback(() => {
        dispatch(increaseCounterValueAC())
    }, [dispatch]);

    const decreaseCounterValue = useCallback(() => {
        dispatch(decreaseCounterValueAC());
    }, [dispatch]);

    const resetCounterValue = useCallback(() => {
        dispatch(resetCounterValueAC());
    }, [dispatch]);

    return (
        <div className={s.app}>
            <div className={s.wrapper}>
                <div className={`${s.display} ${s.displaySettings}`}>
                    <DisplaySettings
                        onChange={changeMaxValueHandler}
                        value={max}
                        title='Max Value: '
                        errorDisplayMax={error.errorMax}/>
                    <DisplaySettings
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
