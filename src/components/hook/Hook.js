import React, {useEffect, useState} from "react";
const ref = React.createRef();
window.timer = null;
function MoveBlock(props) {
    useEffect(() => {
        const div = ref.current;
        let curtimes = 0;
        const disX = props.left / 1000;
        const disY = props.top / 1000;
        window.timer = setInterval(() => {
            curtimes++;
           const  newLeft = curtimes * disX;
           const newTop = curtimes * disY;
           div.style.left = newLeft + "px";
           div.style.top = newTop + "px";
        },1000)

    })
    return <div
        ref={ref}
        style={{width: '100px',height:'100px',background: 'red',left:0, top:0}}>

    </div>
}
function Hook() {
    const [count, setCount] = useState(0);
    // const [arr, setArr] = useState(new Array(1, 0));
    // useEffect(() => {
    //     // console.log(`你点击了${count}次`);
    // });
    return(<div>
        {/*<div>{count}</div>*/}
        {/*<button onClick={() => setCount(count+1)}>+</button>*/}
        <MoveBlock left={100} top={100}/>
    </div>)

}
export default Hook
