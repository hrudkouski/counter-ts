import React, {useState} from 'react';
import './App.css';
import Display from "./components/Display";
import Button from "./components/Button";
import LocalStorageExample from "./components/LocalStorageExample";

function App() {

    const [value, setValue] = useState<number>(0);

    function increaseCounterValue() {
        setValue(value === 5 ? value : value + 1);
    }

    function decreaseCounterValue() {
        setValue(value === 0 ? value : value - 1);
    }

    function resetCounterValue() {
        setValue(0);
    }

    /////////////////////////////////////////// localStorage//////////////////////////////////////////////////

    // const [minNumber, setMinNumber] = useState(0);
    // const [maxNumber, setMaxNumber] = useState(5);
    // const [number, setNumber] = useState<number>(0);
    //
    // useEffect(() => {
    //     setNumber(restoreState('max value', 0))
    // }, [])
    //
    // useEffect(() => {
    //     saveState('max value', number)
    // }, [number])
    //
    // function saveState<T>(key: string, state: T) {
    //     const stateAsString = JSON.stringify(state)
    //     localStorage.setItem(key, stateAsString)
    // }
    //
    // function restoreState<T>(key: string, defaultState: T) {
    //     let state = defaultState
    //     const stateAsString = localStorage.getItem(key)
    //     if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    //     return state
    // }
    //
    // const incNumberValueHandler = () => {
    //     setNumber(number + 1)
    //     saveState('counter number', number)
    // }

    // const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setMaxNumber(+(e.currentTarget.value))
    // }

    // const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setMinNumber(+(e.currentTarget.value))
    // }

    //////////////////////////////////////////////////////////////////////////////////////////


    // UI
    return (
        <div className="App">
            {/*<div className='wrapper'>*/}
            {/*    <h1 style={{color: 'white', margin: '20px'}}>*/}
            {/*        {number}*/}
            {/*    </h1>*/}
            {/*    <div>*/}
            {/*        <span style={{color: 'white', margin: '20px'}}>*/}
            {/*            max value:*/}
            {/*        </span>*/}
            {/*        <input*/}
            {/*            // value={maxNumber}*/}
            {/*            // onChange={changeMaxValueHandler}*/}
            {/*            type='number'*/}
            {/*            value={number}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <span style={{color: 'white', margin: '20px'}}>*/}
            {/*            min value:*/}
            {/*        </span>*/}
            {/*        <input*/}
            {/*            // value={minNumber}*/}
            {/*            // onChange={changeMinValueHandler}*/}
            {/*            type='number'*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div style={{margin: '20px'}}>*/}
            {/*        /!*<button*!/*/}
            {/*        /!*    onClick={setToLocalStorageHandler}>*!/*/}
            {/*        /!*    set*!/*/}
            {/*        /!*</button>*!/*/}
            {/*        /!*<button*!/*/}
            {/*        /!*    style={{marginLeft: '5px'}}*!/*/}
            {/*        /!*    onClick={getFromLocalStorageHandler}>*!/*/}
            {/*        /!*    get*!/*/}
            {/*        /!*</button>*!/*/}
            {/*        <button*/}
            {/*            style={{marginLeft: '155px'}}*/}
            {/*            onClick={incNumberValueHandler}>*/}
            {/*            set*/}
            {/*        </button>*/}
            {/*    </div>*/}


            {/*</div>*/}
            <div className='wrapper'>
                <Display value={value}/>

                <div className='buttons'>
                    <Button
                        disabled={value === 5}
                        title={'+'}
                        onClickChangeValue={increaseCounterValue}
                    />
                    <Button
                        disabled={value === 0}
                        title={'-'}
                        onClickChangeValue={decreaseCounterValue}
                    />
                    <Button
                        title={'res'}
                        onClickChangeValue={resetCounterValue}
                    />
                </div>
            </div>
            <LocalStorageExample/>
        </div>
    );
}

export default App;