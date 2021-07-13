//  返回一个对象--虚拟dom
// 如果是一个组件，第一个参数是一个函数，而不是一个字符串
function createElement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children,
    key: attrs.key || null,
  }
}

export default createElement;