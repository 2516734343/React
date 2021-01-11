import React, {Component, useMemo, useState} from "react";
import './index.css';
import Select from "../Select";
import Input from "../Input";

/**
 * 1、current
 * 2、total
 * 3、pageSize
 * 4、页码最多显示多少个 limit
 */
export default function Pagination(props) {
    const {current, pageSize, total, limit, result, data, showQuickJumper} = props;
    // 监听总页数的变化
    const pageNumber = useMemo(() => {
        return getPageNumber(props)
    }, [props.total, props.pageSize]);
    // 最小页
    const min = getMin(props);
    // 最大页
    const max = getMax(props);
    // 跳到多少页
    const [jumpPage, setJumpPage] = useState('');
    function blur(e) {
        setJumpPage(e.target.value);
        toPage(+e.target.value, props);
    }
    function handleChange(e) {
        setJumpPage(e.target.value);
        // toPage(e.target.value, props);
    }
    function onPressEnter(e) {
        setJumpPage(e.target.value);
        toPage(+e.target.value, props);
    }
    // 数字页码
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(<span className={current === i ? 'active item' : 'item'} onClick={() => toPage(i, props)}>{i}</span>)
    }
    return <div>
        {props.showTotal && props.showTotal(props.total)}
        <span className={current === 1 ? 'item disabled first' : 'item'}
              onClick={() => {
                  toPage(1, props)
              }}>首页</span>
        <span className={current === 1 ? 'item disabled' : 'item'}
              onClick={() => {
                  toPage(current - 1 < 1 ? 1 : current - 1, props)
              }}>上一页</span>
        {arr}
        <span className={current === pageNumber ? 'item disabled' : 'item'}
              onClick={() => {
                  toPage(current + 1 > pageNumber ? pageNumber : current + 1, props)
              }}>下一页</span>
        <span className={current === pageNumber ? 'item disabled' : 'item'}
              onClick={() => {
                  toPage(pageNumber, props)
              }}>尾页</span>
        <span>{props.current}</span> / <span>{pageNumber}</span>
        <Select name={'pagination'}
                value={result}
                data={data}
                style={{marginLeft: '10px', height: '30px', padding: '4px'}}
                onChange={(result) => {
                    changePageSize(result, props)
                }}/>
        {showQuickJumper && <span style={{marginLeft: '5px'}}>跳至
            <Input style={{margin: '0px 5px', width: '40px', height: '26px'}}
                   value={jumpPage}
                   onBlur={e => blur(e)}
                   onChange={e => handleChange(e)}
                   onPressEnter={e => onPressEnter(e)}/>页</span>}
    </div>
}

function getMin(props) {
    const min = Math.floor(props.current - props.limit / 2);
    if (min <= 1) {
        return 1;
    }
    return min;
}

function getMax(props) {
    const min = getMin(props);
    const pageNumber = getPageNumber(props);
    const max = min + props.limit - 1;
    if (max >= pageNumber) {
        return pageNumber;
    }
    return max;
}

//改变页码
function toPage(target, props) {
    if (target === props.current) { // 目标页码和当前页码相同
        return;
    }
    props.onChange && props.onChange(target);

}

// 改变页容量
function changePageSize(result, props) {
    if (result === props.pageSize) {
        return;
    }
    props.onShowSizeChange && props.onShowSizeChange(props.current, +result);
    // getPageNumber(props);
}

function getPageNumber(props) {
    return Math.ceil(props.total / props.pageSize);
}

