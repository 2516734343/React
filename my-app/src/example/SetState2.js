
import React from 'react';
import ReactDOM from 'react-dom';


export default class SetState2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    }
  }
  componentWillUpdate() {
    console.log('state2 componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('state2 componentDidUpdate');
  }

  // componentDidMount() {
  //   console.log('SetState2调用setState');
  //   this.setState({
  //     index: this.state.index + 1
  //   })
  //   console.log('state2', this.state.index);

  //   console.log('SetState2调用setState');
  //   this.setState({
  //     index: this.state.index + 1
  //   })
  //   console.log('state2', this.state.index);
  // }

  componentDidMount() {
    setTimeout(() => {
      console.log('调用setState2---');
      this.setState({
        index: this.state.index + 1
      })
      console.log('state2---', this.state.index);
      console.log('调用setState2--->');
      this.setState({
        index: this.state.index + 1
      })
      console.log('state2--->', this.state.index);
    }, 0);
  }


  render() {
    return (
      <div>
        state2
      </div>
    );
  }
}