// Actions
const RESET_COUNTER_VALUE = 'counter-ts/counter-reducer/RESET_COUNTER_VALUE';
const DECREASE_COUNTER_VALUE = 'counter-ts/counter-reducer/DECREASE_COUNTER_VALUE';
const INCREASE_COUNTER_VALUE = 'counter-ts/counter-reducer/INCREASE_COUNTER_VALUE';
const SET_SETTINGS = 'counter-ts/counter-reducer/SET_SETTINGS';
const SET_ERROR_COMMON = 'counter-ts/counter-reducer/SET_ERROR_COMMON';
const CHANGE_MAX_VALUE = 'counter-ts/counter-reducer/CHANGE_MAX_VALUE';
const CHANGE_MIN_VALUE = 'counter-ts/counter-reducer/CHANGE_MIN_VALUE';

// Types
export type ErrorType = {
    errorCommon: boolean
    errorMin: boolean
    errorMax: boolean
}
type InitialStateType = typeof initialState;
type ResetCounterValueAT = ReturnType<typeof resetCounterValueAC>;
type DecreaseCounterValueAT = ReturnType<typeof decreaseCounterValueAC>;
type IncreaseCounterValueAT = ReturnType<typeof increaseCounterValueAC>;
type SetSettingsAT = ReturnType<typeof setSettingsAC>;
type SetErrorCommonAT = ReturnType<typeof setErrorCommonAC>;
type ChangeMaxValueAT = ReturnType<typeof changeMaxValueAC>;
type ChangeMinValueAT = ReturnType<typeof changeMinValueAC>;
type ActionStateType = ResetCounterValueAT
    | DecreaseCounterValueAT
    | IncreaseCounterValueAT
    | SetSettingsAT
    | ChangeMaxValueAT
    | SetErrorCommonAT
    | ChangeMinValueAT;

// Initial State
const initialState = {
    value: 0,
    min: 0,
    max: 5,
    error: {
        errorCommon: false,
        errorMin: false,
        errorMax: false,
    }
}

// Reducer
export const counterReducer = (state: InitialStateType = initialState, action: ActionStateType): InitialStateType => {
    switch (action.type) {
        case RESET_COUNTER_VALUE:
            return {
                ...state,
                value: state.min
            }
        case DECREASE_COUNTER_VALUE:
            return {
                ...state,
                value: state.value === state.min ? state.value : state.value - 1
            }
        case INCREASE_COUNTER_VALUE:
            return {
                ...state,
                value: state.value === state.max ? state.value : state.value + 1
            }
        case SET_SETTINGS:
            return {
                ...state,
                value: state.min,
                error: {
                    ...state.error,
                    errorCommon: true
                }
            }
        case SET_ERROR_COMMON:
            return {
                ...state,
                error: {
                    ...state.error,
                    errorCommon: false,
                }
            }
        case CHANGE_MAX_VALUE:
            if (action.maxValue <= 0 || action.maxValue <= state.min) {
                return {
                    ...state,
                    error: {
                        ...state.error,
                        errorCommon: true,
                        errorMax: true,
                    },
                    max: action.maxValue,
                }
            } else {
                return {
                    ...state,
                    error: {
                        ...state.error,
                        errorMin: state.error.errorMin && state.min >= 0
                            ? false
                            : state.error.errorMin,
                        errorCommon: state.error.errorMin && state.min >= 0
                            ? false
                            : state.error.errorMin,
                        errorMax: false,
                    },
                    max: action.maxValue,
                }
            }
        case CHANGE_MIN_VALUE:
            if (action.minValue < 0 || action.minValue >= state.max) {
                return {
                    ...state,
                    error: {
                        ...state.error,
                        errorCommon: true,
                        errorMin: true,
                    },
                    min: action.minValue,
                }
            } else {
                return {
                    ...state,
                    error: {
                        ...state.error,
                        errorMin: false,
                        errorCommon: state.error.errorMax && state.max >= 0
                            ? false
                            : state.error.errorMax,
                        errorMax: state.error.errorMax && state.max >= 0
                            ? false
                            : state.error.errorMax,
                    },
                    min: action.minValue,
                }
            }
        default:
            return state;
    }
}

// Action Creators
export const resetCounterValueAC = () => {
    return {
        type: RESET_COUNTER_VALUE,
    } as const
}
export const decreaseCounterValueAC = () => {
    return {
        type: DECREASE_COUNTER_VALUE,
    } as const
}
export const increaseCounterValueAC = () => {
    return {
        type: INCREASE_COUNTER_VALUE,
    } as const
}
export const setSettingsAC = () => {
    return {
        type: SET_SETTINGS,
    } as const
}
export const setErrorCommonAC = () => {
    return {
        type: SET_ERROR_COMMON,
    } as const
}
export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: CHANGE_MAX_VALUE,
        maxValue
    } as const
}
export const changeMinValueAC = (minValue: number) => {
    return {
        type: CHANGE_MIN_VALUE,
        minValue,
    } as const
}