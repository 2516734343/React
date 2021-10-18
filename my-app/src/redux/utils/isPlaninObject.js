

/**
 * 判断对象是否是一个plain-object
 * @param {*} obj 
 */
export default function isPlainObejct(obj) {
  if (typeof obj !== 'object') {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
}