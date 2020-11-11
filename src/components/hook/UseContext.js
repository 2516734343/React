import React, { useEffect, useState, createContext, useContext } from "react";
const CountContext = createContext();// context 可以不用一层层传到每一个组件，就可以将值深入传递到组件树
function Counter() {
    const count = useContext(CountContext); 
    return <h3>useContext: {count}</h3>; // 往上找到最近的provider,然后使用它的值
}
function Example() {
    const [count, setCount] = useState(0);
    return <div>
        <p>you cilck {count} times</p>
        <button onClick={() => { setCount(count + 1) }}>click</button>
        <CountContext.Provider value={count}>
            <Counter/>
        </CountContext.Provider>
    </div>
}
export default Example;
