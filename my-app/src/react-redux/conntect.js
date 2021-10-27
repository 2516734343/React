import React from "react";
import { bindActionCreators } from "redux";
import ctx from "./ctx";

export default function (mapStateToProps, mapDispatchToProps) {
  // 返回一个高阶函数
  return function hoc(Comp) {

    class Temp extends React.PureComponent {

      // 只有该组件需要的数据发生变化时才重新渲染
      /**
       * 
       * @returns 处理事件
       */
      getEventHandlers() {
        if (typeof mapDispatchToProps === 'function') {
          return mapDispatchToProps(this.store.dispatch, this.props);
        }
        else if (typeof mapDispatchToProps === 'object') {
          return bindActionCreators(mapDispatchToProps, this.store.dispatch);
        }
      }

      static contextType = ctx;

      constructor(props, context) {
        super(props, context);
        this.store = this.context;
        console.log(this.context);

        if (mapStateToProps(this.store.getState())) {

          // 状态中的数据来自于仓库中映射的结果
          this.state = mapStateToProps(this.store.getState(), this.props);

          // 监听仓库中的数据变化, 得到一个取消监听的函数
          this.unListen = this.store.subscribe(() => {
            this.setState(mapStateToProps(this.store.getState(), this.props))
          })

        }

        if (mapDispatchToProps) {
          this.handlers = this.getEventHandlers();
        }

      }
      componentWillUnmount() {
        if (this.unListen) {
          // 组件卸载时，取消监听
          this.unListen();
        }
      }

      render() {
        return <Comp {...this.state} {...this.handlers} {...this.props} />;
      }
    }

    Temp.displayName = Comp.displayName || Comp.name;  // 返回组件的名称必须和传入的组件名称一致

    return Temp;

  }


}