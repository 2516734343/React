function setAttribute(dom, name, value) {
  // 属性名className
  if (name === 'className') name = 'class';

  // 监听事件
  if (/on\w+/.test(name)) {
    name = name.toLowerCase();
    dom[name] = value || '';
  }
  //属性是style,更新style
  else if (name === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (typeof value === 'object') {
      for (let key in value) {
        dom.style[key] = typeof value[key] === 'number' ? value[key] + 'px' : value[key];
      }
    }
  }
  // 普通属性则直接更新
  else {
    if (name in dom) {
      dom[name] = value || '';
    }
    if (value) {
      dom.setAttribute(name, value);
    } else {
      dom.removeAttribute(name);
    }
  }


}

export default setAttribute;