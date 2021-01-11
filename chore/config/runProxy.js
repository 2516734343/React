// 引入express框架
const express = require('express');
let app = express();

// 引入跨域中间件
let proxy = require('http-proxy-middleware');

const CONFIG = {
    port: 3000
};

//"/" 是匹配的路由,它会将匹配的路由进行转发，没匹配到的就不会转发
app.use('/api', proxy({
    target: 'https://open.duyiedu.com/',// 目标后端服务地址
    changeOrigin: true, // 发送请求头中host会设置成target 如果是false,则为浏览器发出的host，比如，如果是本地，target就会为localhost
    // onProxyRes: (proxyRes, req, res) => {
    //     proxyRes.setHeader('Content-Type', 'application/json;charset=UTF-8');
    // }
}));
console.log(222);
app.listen(CONFIG.port); //监听端口号
// const server = app.listen(CONFIG.port); //监听端口号
// console.log('111', server);
// server.on('request', (req, res) => {
//     console.log(req);
//     console.log(res)
// });


