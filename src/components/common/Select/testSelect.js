import React, {Component} from "react";
import Select from './index';
export default class TestSelect extends Component{
    state ={
        data: [
            {value: '1', text: 'apple'},
            {value: '2', text: 'banana'},
            {value: '3', text: 'pear'},
            {value: '4', text: 'mongo'}
        ],
        result: '2',

    };
    render() {
        return (
            <div>
                <Select name={'fruit'}
                               {...this.state}
                               onChange={result => this.setState({
                                   result,
                               })}/>
            </div>
        );
    }
}
