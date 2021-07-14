import { ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types";

export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function asyncIncrement() {
    dispatch(disableButtons())
    return function(dispatch) {
        setTimeout(() => {
            dispatch({type: ASYNC_INCREMENT})
            dispatch(enableButtons())
        }, 1500)
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function enableButtons() {
    return {type: ENABLE_BUTTONS}
}

export function disableButtons() {
    return {type: DISABLE_BUTTONS}
}
