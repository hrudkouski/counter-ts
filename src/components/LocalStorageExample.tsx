import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './LocalStorageExample.module.css'

function LocalStorageExample() {

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

    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(max))
    // }, [max])
    //
    // useEffect(() => {
    //     localStorage.setItem('minValue', JSON.stringify(min))
    // }, [min])

    const setHandler = () => {
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('minValue', JSON.stringify(min))
    }

    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value);
        if (value < 0) {
            setError(true)
        } else {
            setError(false)
            setMin(Number(e.currentTarget.value))
        }
    }

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value);
        if (value < 0) {
            setError(true)
        } else {
            setError(false)
            setMax(Number(e.currentTarget.value))
        }
    }

    return (
        <div style={{color: 'white'}}>
            <div>
                {error && <div className={s.error}>Incorrect value</div>}
                <div>
                    <span>Max Value: </span>
                    <input
                        className={error && max < 0 ? s.inputBorder : ''}
                        onChange={changeMaxValueHandler}
                        value={max}
                        type="number"
                    />
                </div>
                <div>
                    <span>Min Value: </span>
                    <input
                        className={error && min < 0 ? s.inputBorder : ''}
                        onChange={changeMinValueHandler}
                        value={min}
                        type="number"
                    />
                </div>
            </div>
            <button
                disabled={error}
                onClick={setHandler}>
                set
            </button>
        </div>
    );
}

export default LocalStorageExample;
