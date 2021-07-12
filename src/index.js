import { createStore } from './createStore'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

const counter = document.getElementById('counter'),
      addBtn = document.getElementById('add'),
      subBtn = document.getElementById('sub'),
      asyncBtn = document.getElementById('async'),
      themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0)

addBtn.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})

subBtn.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'})
})

asyncBtn.addEventListener('click', () => {

})

themeBtn.addEventListener('click', () => {

})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state
})

store.dispatch({type: 'init_application'})