import React, {Component} from "react";
import './index.css';
export default function ThreeLayOut(props){
    const defaultProps = {
        lefWidth: 200,
        rightWidth: 200,
        minWidth: 800,
        gap: 0,
    };
    const datas = Object.assign({},defaultProps, props);
    return <div className={'three-layout'} style={{
        minWidth: datas.minWidth
    }}>
        <div className={'main'}>
            {props.children}
        </div>
        <div className={'aside-left'} style={{
            width: datas.lefWidth,
            marginRight: datas.gap
        }}>{props.left}</div>
        <div className={'aside-right'} style={{
            width: datas.rightWidth,
            marginLeft: datas.gap
        }}>{props.right}</div>
    </div>
}
