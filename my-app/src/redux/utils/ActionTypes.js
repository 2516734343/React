

function getRandomString(length) {
  return Math.random().toString(36).substr(2, length);
}

export default {
  INIT() {
    return `@@redux/INIT/${getRandomString(7)}`
  },
  UNKNOW() {
    return `@@redux/UNKNOW/${getRandomString(7)}`
  }
}