import React, {useState} from 'react';
import './App.css';
import Display from "./components/Display";
import Button from "./components/Button";

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

    return (
        <div className="App">
            <div className='wrapper'>
                <Display value={value}/>
                <div className='buttons'>
                    <Button
                        title={'+'}
                        onClickChangeValue={increaseCounterValue}
                        value={value}/>
                    <Button
                        title={'-'}
                        onClickChangeValue={decreaseCounterValue}
                        value={value}/>
                    <Button
                        title={'res'}
                        onClickChangeValue={resetCounterValue}
                        value={value}/>
                </div>
            </div>
        </div>
    );
}

export default App;
