import {
    counterReducer,
    decreaseCounterValueAC,
    increaseCounterValueAC,
    InitialStateType,
    resetCounterValueAC
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

test('counter value should be reset for minimum value', () => {
    const action = resetCounterValueAC();
    const endState = counterReducer(startState, action)
    expect(endState.value).toBe(0);
    expect(endState.value).toBe(endState.min);
    expect(endState.value).not.toBe(endState.max)
});

test('counter value should be decrease', () => {
    const action = decreaseCounterValueAC();
    const endState = counterReducer(startState, action)
    expect(endState.value).toBe(1);
    expect(endState.value).toBe(startState.value === startState.min ? startState.value : startState.value - 1);
});

test('counter value should be increase', () => {
    const action = increaseCounterValueAC();
    const endState = counterReducer(startState, action)
    expect(endState.value).toBe(3);
    expect(endState.value).toBe(startState.value === startState.max ? startState.value : startState.value + 1);
});