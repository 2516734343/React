// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

// ====》编译后：

// ReactDOM.render(
//   React.createElement( 'h1', null, 'Hello, world!' ),
//   document.getElementById('root')
// );

import { setAttribute } from './dom';

// function _render(vnode, container) {
//   if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';
//   if (typeof vnode === 'number') vnode = String(vnode);
//   // 文本节点
//   if (typeof vnode === 'string') {
//     const textNode = document.createTextNode(vnode);
//     return textNode;
//   }
//   const dom = document.createElement(vnode.tag);

//   if (vnode.attrs) {
//     Object.keys(vnode.attrs).forEach(key => {
//       const value = vnode.attrs[key];
//       setAttribute(dom, key, value); // 设置属性
//     })
//   }
//   vnode.children.forEach(child => _render(child, dom)); // 渲染子节点

//   return dom; // 挂载到目标节点

// }

import diff from './diff';

function _render(vnode, container) {
  if (vnode === undefined) return;

  if (vnode.isReactComponent) {
    const component = vnode;

    if (component._container) {
      if (component.componentWillUpdate) {
        component.componentWillUpdate();
      }
    } else if (component.componentWillMount) {
      component.componentWillMount();
    }

    component._container = container; // 保存父元素，用于更新
    vnode = component.render();
  }

  if (typeof vnode === 'string' || typeof vnode === 'number') {
    const textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }

  const dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      if (key === 'className') key = 'class';
      // 如果是监听事件
      if (typeof value === 'function') {
        dom[key.toLowerCase()] = value;
      } else {
        dom.setAttribute(key, vnode.attrs[key]);
      }
    })
  }

  if (vnode.children) {
    vnode.children.forEach(child => _render(child, dom)); // 渲染子节点
  }

  return container.appendChild(dom);

}

function render(vnode, container, dom) {
  return diff(dom, vnode, container);
}

export default render;