import React, {useState} from 'react';
import './App.css';
import ButtonDec from './components/ButtonDec';
import ButtonInc from "./components/ButtonInc";
import ButtonRes from './components/ButtonRes';
import Display from "./components/Display";

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
                    <ButtonInc
                        increaseCounterValue={increaseCounterValue}
                        title='+'
                        value={value}/>
                    <ButtonDec
                        decreaseCounterValue={decreaseCounterValue}
                        title='-'
                        value={value}/>
                    <ButtonRes
                        resetCounterValue={resetCounterValue}
                        title='res'
                        value={value}/>
                </div>
            </div>
        </div>
    );
}

export default App;
