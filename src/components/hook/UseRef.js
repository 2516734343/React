import userEvent from '@testing-library/user-event';
import React, {useEffect, useRef, useState} from 'react';
// useRef 获取dom元素  保存变量
function UseRef() {
    const inputEle = useRef();
   function onChangeInput() {
       inputEle.current.value = '111';
       console.log(inputEle, inputEle.current);
   }
   const [text, setText] = useState('hello');
   const textRef = useRef();
   useEffect(() => {
       textRef.current = text;
       console.log('textRef.current:', textRef.current);
   })
    return <div>
        <input ref={inputEle}></input>
        <button onClick={onChangeInput}>点击</button>
        <h3>useRef保存变量：</h3>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
}

export default UseRef;