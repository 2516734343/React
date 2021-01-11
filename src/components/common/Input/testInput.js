import React, {Component} from "react";
import Input from "./index";

export default class TestInput extends Component {
    state = {
        value: '',
        disabled: false,
    };
    onChange = (e) => {
        this.setState({
            value: e.target.value.trim()
        })
    };

    onPressEnter(e) {
        this.setState({
            value: e.target.value.trim()
        })
    };
    blur(e) {
        this.setState({
            value: e.target.value.trim()
        })
    };

    render() {
        return (
            <div>
                <Input value={this.state.value}
                       placeholder={'请输入'}
                       disabled={this.state.disabled}
                       onChange={e =>this.onChange(e)}
                       onBlur={e =>this.blur(e)}
                       onPressEnter={e =>this.onPressEnter(e)}/>
            </div>
        );
    }
}
