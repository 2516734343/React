import React, {Component} from "react";

export default function Select(props) {

    return (
        <select value={props.result}
                name={props.name}
                style={props.style}
                onChange={e => handleChange(e, props)}>
            {getSelect(props)}
        </select>
    );
}

function handleChange(e, props) {
    props.onChange && props.onChange(e.target.value, props.name, e);
}

function getSelect(props) {
    return props.data.map(item => {
        return <option key={item.value} value={item.value}>{item.text}</option>;
    })
}
