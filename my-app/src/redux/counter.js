import React from 'react';
import store from './index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import increase from './action/number-action';

function Counter(props) {
  return (
    <div>
      <h2>{props.number}</h2>
      <p>
        <button onClick={props.onAsyncDecrease}>异步减</button>
        <button onClick={props.onDecrease}>减</button>
        <button onClick={props.onIncrease}>加</button>
        <button onClick={props.onAsyncIncrease}>异步加</button>
      </p>
    </div>
  )
}
/**
 * 映射数据
 * @param {} state 
 * @returns 
 */
function mapStateToProps(state) {
  return {
    number: state.number,
  }
}
/**
 * 映射事件
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onIncrease: increase(),
  }, dispatch)
  // return {
  //   onAsyncDecrease: () => {
  //     dispatch(increase)
  //   }
  // }
}
// export default class CounterContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     store.subscribe((mutation, state) => {
//       this.setState(mapStateToProps(store.getState()))
//     });
//     this.state = mapStateToProps(store.getState())
//   }
//   render() {
//     return (
//       <Counter {...this.state} />
//     );
//   }

// }
// connnect返回一个高阶组件
// const hoc = connect(mapStateToProps, mapDispatchToProps)

// // 传入展示组件，返回容器组件
// export default hoc(Counter)



// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

const creatore = {
  onIncrease: increase()
}

export default connect(mapStateToProps, creatore)(Counter)