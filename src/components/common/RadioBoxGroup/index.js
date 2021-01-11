import React, {Component} from "react";

export default class RadioBoxGroup extends Component {
    handleChange(e) {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    }

    getRadioBox() {
        return this.props.data.map(item => {
            return <label key={item.value}>
                <input type={'radio'}
                       name={this.props.name}
                       value={item.value}
                       checked={item.value === this.props.result}
                       onChange={e => this.handleChange(e)}/>
                {item.text}
            </label>
        })
    }

    render() {
        return (
            <div>
                {this.getRadioBox()}
            </div>
        );
    }
}
