import React, {Component} from "react";
import Pagination from './index';
import {getStudents} from '../../../service/student';

export default class PaginationTest extends Component {
    state = {
        current: 1,
        pageSize: 10,
        total: 600,
        limit: 5,
        data: [
            {value: 10, text: '10条/页'},
            {value: 20, text: '20条/页'},
            {value: 50, text: '50条/页'},
            {value: 100, text: '100条/页'}
        ],
        result: 10,
        studentList: [],
    };

    componentDidMount() {
        this.getDatas();
        console.log(this.state.studentList);
    }

    async getDatas() {
        const respData = await getStudents(this.state.current, this.state.pageSize);
        this.setState({
            studentList: respData
        });
    }

    onChange = (newPage) => {
        this.setState({
            current: newPage,
        })
    };
    onShowSizeChange = (current, size) => {
        this.setState({
            current: current || this.state.current,
            pageSize: size || this.state.pageSize
        })
    };

    render() {
        console.log(this.state.pageSize);
        return <Pagination {...this.state}
                           showTotal={total => `共${total}条`}
                           onChange={this.onChange}
                           showQuickJumper={true}
                           onShowSizeChange={this.onShowSizeChange}/>
    }
}
