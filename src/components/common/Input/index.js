import React, {Component} from "react";

export default class Input extends Component {
    handleChange(e) {
        this.props.onChange && this.props.onChange(e);
    }

    blur(e) {
        this.props.onBlur && this.props.onBlur(e);
    }

    keyPress(e) {
        this.props.onPressEnter && this.props.onPressEnter(e);
    }

    render() {
        return <input value={this.props.value}
                      style={this.props.style}
                      disabled={this.props.disabled}
                      placeholder={this.props.placeholder}
                      onChange={(e) => this.handleChange(e)}
                      onBlur={(e) => this.blur(e)}
                      onKeyDown={(e) => this.keyPress(e)}/>
    }

}
