import React, {Component} from 'react';

export default class CheckBoxGroup extends Component {

    handleChange(e) {
        let newArr = [];
        if (e.target.checked) {
            newArr = [...this.props.chooseData, e.target.value];
        } else {
            newArr = this.props.chooseData.filter(item => item !== e.target.value);
        }
        this.props.onChange && this.props.onChange(newArr, this.props.name, e);
    }

    getCheckBoxGroup() {
        return this.props.data.map(item => {
            return <label key={item.value}>
                <input type={'checkbox'}
                       value={item.value}
                       name={this.props.name}
                       checked={this.props.chooseData.includes(item.value)}
                       onChange={e => this.handleChange(e)}/>
                {item.text}
            </label>;
        })
    }

    render() {
        return (
            <div>{this.getCheckBoxGroup()}</div>
        )
    }
}
