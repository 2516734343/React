import { enqueueSetState } from './set-state-queue';

class Component {
  constructor(props = {}) {
    this.isReactComponent = true;
    this.state = {};
    this.props = props;
  }
  // 直接覆盖，会导致setState更新渲染多次----》将多个setState调用合并为一个,使用队列保存每次setState数据，然后每隔一段时间，清空队列，渲染组件
  setState(stateChange) {
    enqueueSetState(stateChange, this);
    // Object.assign(this.state, stateChange);
    // renderComponent(this);
  }
}

export default Component;