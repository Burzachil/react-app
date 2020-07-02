import React from 'react';
import store from '../../store/store'

function Counter() {
    return (
        <div>
            <button onClick={() => store.dispatch({type: 'INCREMENT'})}>Добавить</button>
            <button onClick={() => store.dispatch({type: 'DECREMENT'})}>Уменьшить</button>
        </div>
    )
}

export default Counter;