import React, { useMemo, useState } from 'react';

// useMemo避免了重复渲染问题，shouldCompnentUpdate ，状态变了，组件是否需要重新渲染
//解决自组件重复执行问题
function UseMemo() {
    const [name1, setName1] = useState('小辣椒');
    const [name2, setName2] = useState('肉夹馍');
    return <>
        <button onClick={() => setName1(new Date().getTime())}>小辣椒</button>
        <button onClick={() => setName2(new Date().getTime() + '就是现在')}>肉夹馍</button>
        <ChildComponent name={name1}>{'这是子组件的cildren'+ name2}</ChildComponent>
    </>
}

function ChildComponent({ name, children }) {
    function changeName(name) {
        console.log('小辣椒来了');
        return name + '666';
    }

    // const action = changeName(name);
    const action = useMemo(() => changeName(name), [name]);
    return (<>
        <div>{action}</div>
        <div>{children}</div>
    </>)
}

export default UseMemo;