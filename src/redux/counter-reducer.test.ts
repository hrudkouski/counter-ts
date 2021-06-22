import {
    changeMaxValueAC, changeMinValueAC,
    counterReducer,
    decreaseCounterValueAC,
    increaseCounterValueAC,
    InitialStateType,
    resetCounterValueAC, setErrorCommonAC, setSettingsAC
} from "./counter-reducer";

let startState: InitialStateType;

beforeEach(() => {
    startState = {
        value: 2,
        min: 0,
        max: 5,
        error: {
            errorCommon: false,
            errorMin: false,
            errorMax: false,
        }
    };
})

test('when "res" button is pressed, counter value resets for minimum value', () => {
    const action = resetCounterValueAC();
    const endState = counterReducer(startState, action)
    expect(endState.value).toBe(0);
    expect(endState.value).toBe(endState.min);
    expect(endState.value).not.toBe(endState.max)
});

test('when "-" button is pressed, counter value decreases', () => {
    const action = decreaseCounterValueAC();
    const endState = counterReducer(startState, action)
    expect(endState.value).toBe(1);
    expect(endState.value).toBe(startState.value === startState.min ? startState.value : startState.value - 1);
});

test('when "+" button is pressed, counter value increases', () => {
    const action = increaseCounterValueAC();
    const endState = counterReducer(startState, action)
    expect(endState.value).toBe(3);
    expect(endState.value).toBe(startState.value === startState.max ? startState.value : startState.value + 1);
});

test('when "set" button is pressed, the counter value is minimal and errorCommon is true', () => {
    const action = setSettingsAC();
    const endState = counterReducer(startState, action)
    expect(endState.value).toBe(startState.min)
    expect(endState.error.errorCommon).toBeTruthy();
});

test('when input "Max Value" or input "Min Value" is changed, the errorCommon is false', () => {
    const action = setErrorCommonAC();
    const endState = counterReducer(startState, action)
    expect(endState.error.errorCommon).toBeFalsy();
});

test('when input "Max Value" is changed, the "set" button changes errorCommon for false', () => {
    const action = changeMaxValueAC(6);
    const endState = counterReducer(startState, action);
    expect(endState.max).toBe(6);
    expect(endState.error.errorMin).toBeFalsy();
    expect(endState.error.errorCommon).toBeFalsy();
    expect(endState.error.errorMax).toBeFalsy();
});

test('when input "Min Value" is changed, the "set" button changes errorCommon for false', () => {
    const action = changeMinValueAC(1);
    const endState = counterReducer(startState, action);
    expect(endState.min).toBe(1);
    expect(endState.error.errorMin).toBeFalsy();
    expect(endState.error.errorCommon).toBeFalsy();
    expect(endState.error.errorMax).toBeFalsy();
});