import React, {Component} from "react";


export default class Ref extends Component{
    constructor(props) {
        super(props);
        this.txt = React.createRef();//产生一个对象
        console.log(this.txt);
        // this.txt = {
        //     current: null
        // }
    }
    handleClick = () => {
        console.log(this);
        this.txt.current.focus();  //真实的dom在this.txt.current
    } ;
    render() {
        return <div>
            <input type={'text'} ref={this.txt} placeholder={'请输入'}/>
            <button onClick={this.handleClick}>点击</button>
        </div>
    }
}
