
import React from 'react';
import ReactDOM from 'react-dom';
import SetState1 from './SetState1';
import SetState2 from './SetState2';

export default class ParentModal extends React.Component {
  componentDidMount() {
    console.log('parent componentDidMount');
  }

  render() {
    return (
      <div>
        parent1
        state2 :---<SetState2></SetState2>
        state1: ---<SetState1></SetState1>
      </div>
    );
  }
}