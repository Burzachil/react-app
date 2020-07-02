import { createStore } from 'redux';

function reducer(state = {itt: 1}, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {itt: state.itt + 1};
        case 'DECREMENT':
            return {itt: state.itt - 1};

        default:
            return state
    }
}

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

export default store;