import React, {Component} from "react";
import RadioBoxGroup from './index';
export default class TestRadio extends Component{
    state ={
        data: [
            {value: '1', text: 'apple'},
            {value: '2', text: 'banana'},
            {value: '3', text: 'pear'}
            ],
        result: '2',

    };
    render() {
        return (
            <div>
                <RadioBoxGroup name={'fruit'}
                               {...this.state}
                               onChange={result => this.setState({
                                   result,
                               })}/>
            </div>
        );
    }
}
