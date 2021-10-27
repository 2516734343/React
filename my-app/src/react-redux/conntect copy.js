
import React, { useState, useContext, useEffect } from "react";
import { bindActionCreators } from "redux";
import ctx from "./ctx";

function compare(obj1, obj2) {
  for (const key in obj1) {
    if (obj1[key] === obj2[key]) {
      return true;
    }
  }
  return false;
}

export default function (mapStateToProps, mapDispatchToProps) {
  // 返回一个高阶函数
  return function (Comp) {

    function Temp(props) {

      const store = useContext(ctx);
      const [state, setstate] = useState(mapStateToProps && mapStateToProps(this.store.getState()));

      useEffect(() => {
        return store.subscribe(() => {
          let newState = mapStateToProps && mapStateToProps(this.store.getState());

          setstate(prevState => {

            if (!compare(prevState, newState)) {

              return prevState;

            } else {

              return newState

            }
          })

        })

      }, [store])

      /**
       * 
       * @returns 处理事件
       */
      function getEventHandlers() {
        if (typeof mapDispatchToProps === 'function') {
          return mapDispatchToProps(this.store.dispatch, this.props);
        }
        else if (typeof mapDispatchToProps === 'object') {
          return bindActionCreators(mapDispatchToProps, this.store.dispatch);
        }
      }
      let handlers = {}
      if (mapDispatchToProps) {
        handlers = getEventHandlers();
      }

      return <Comp  {...state} {...handlers} {...props} />
    }

    Temp.displayName = Comp.displayName || Comp.name;  // 返回组件的名称必须和传入的组件名称一致

    return Temp;
  }


}