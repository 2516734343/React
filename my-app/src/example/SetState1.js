
import React from 'react';
import ReactDOM from 'react-dom';


export default class SetState1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    }
  }
  componentWillUpdate() {
    console.log('state1 componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('satte1 componentDidUpdate');
  }

  // componentDidMount() {
  //   console.log('SetState1调用setState');
  //   this.setState({
  //     index: this.state.index + 1
  //   })
  //   console.log('state1', this.state.index);

  //   console.log('SetState1调用setState');
  //   this.setState({
  //     index: this.state.index + 1
  //   })
  //   console.log('state1', this.state.index);
  // }

  componentDidMount() {
    setTimeout(() => {
      console.log('调用setState1');
      this.setState({
        index: this.state.index + 1
      })
      console.log('state1', this.state.index);
      console.log('调用setState1');
      this.setState({
        index: this.state.index + 1
      })
      console.log('state1', this.state.index);
    }, 0);
  }


  render() {
    return (
      <div>
        state1
      </div>
    );
  }
}