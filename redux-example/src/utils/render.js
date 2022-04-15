

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === 'object' ? child : createTextElement(child))
    }
  }
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    }
  }
}
function render(element, container) {
  // 文本节点还是dom节点
  const dom = element.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type);

  // 提取属性
  const isProperty = key => key !== 'children';
  // 给dom元素加属性
  Object.keys(element.props).filter(isProperty).forEach(attr => {
    dom[attr] = element.props[attr]
  })

  // 遍历子元素
  element.props.children.forEach(child => render(child, dom));
  // 插入
  container.appendChild(dom);
}