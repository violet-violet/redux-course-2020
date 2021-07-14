import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { asyncIncrement, changeTheme, decrement, increment } from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

const counter = document.getElementById('counter'),
      addBtn = document.getElementById('add'),
      subBtn = document.getElementById('sub'),
      asyncBtn = document.getElementById('async'),
      themeBtn = document.getElementById('theme')

// function logger(state) {
//     return function(next) {
//         return function(action) {
//             console.log('Prev State: ', state.getState());
//             console.log('action: ', action);
//             const newState = next(action)
//             console.log('State: ', newState);
//             return newState
//         }
//     }
// }

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
        ? 'dark'
        : 'light'
    store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state.counter
    document.body.className = state.theme.value
})

store.dispatch({type: 'init_application'})