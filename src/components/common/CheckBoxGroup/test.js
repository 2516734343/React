import React, {Component} from 'react';
import CheckBoxGroup from './index';
import {getAllStudent} from "../../../service/student";

export default class Test extends Component {
    state = {
        // data: [
        //     {value: '1', text: 'apple'},
        //     {value: '2', text: 'banana'},
        //     {value: '3', text: 'pare'},
        // ],
        // chooseData: ['3']
        data: [],
        chooseData: []
    };
    componentDidMount() {
        this.getDatas();
    }

    async getDatas() {
        const respData = await getAllStudent();
        this.setState({
            data: respData.map(item => ({value: item.id.toString(), text: item.name}))
        })
    }

    render() {
        return <div><CheckBoxGroup name={'fruit'}
                                   {...this.state}
                                   onChange={newArr => this.setState({
                                       chooseData: newArr
                                   })}/></div>;
    }
}
