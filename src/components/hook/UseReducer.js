import React, { useReducer } from 'react';

function ReduceDemo() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add': return state + 1
            case 'sub': return state - 1
            default: return state
        }
    },0);
    return <div>
        <p>计数器：{count}</p>
        <button onClick={() => dispatch('add')}>加</button>
        <button onClick={() => dispatch('sub')}>减</button>
        </div>
}

export default ReduceDemo;










// function countReducer(state, action) {
//     switch (action.type) {
//         case 'add': return state + 1
//         case 'sub': return state - 1
//         default: return state
//     }
// }