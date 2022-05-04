*<!--*

 ** @Descripttion:* 

 ** @Author: beiwangshan*

 ** @version:* 

 ** @Date: 2022-05-04 21:01:14*

 ** @LastEditors: beiwangshan*

 ** @LastEditTime: 2022-05-04 21:06:11*

*-->*

## 🙋‍♂️工具介绍🚀

这是一个基于VUE.JS以及NUXT.JS的axios-http请求API工具。通过http.js分别封装get、post、delete和put请求，同时加入Json格式的post请求方法。使用时只需要在api.js中写上后端的请求方法和路径即可



## 🤖使用方法🪂

### 🛺安装axios

```bash
npm install @nuxtjs/axios
或者
yarn add @nuxtjs/axios
```

接着需要配置`nuxt.config.js`

```json
modules: [
      '@nuxtjs/axios',
  ],
```

### 🛺安装proxy

```bash
npm install @nuxtjs/proxy
```

`proxy`主要用来配置代理，安装完成之后，同样的需要配置`nuxt.config.js`

```json
modules: [
       '@nuxtjs/proxy',
  ],
 axios: {
    proxy: true
  },
```

`proxy: true`使得axios使用代理，支持跨域处理。

### 🛺创建请求

主要用来放`http.js`和`api.js`的地方，方便后续页面的引入；

通常我喜欢单独的创建类似与 `api` 或者 `utils` 的文件夹，单独存放，方便管理

然后修改`api.js`中关于`http.js`的引入

```javascript
import http from "@/utils/http";
```

接着按照后端的接口自行按照`api.js`中的模板进行修改即可。每一个方法使用*export*暴露，使得其他地方也可以直接调用；

```JavaScript
// 获取系统配置
export const getOptions =()=>{

  if (process.client){
    //客户端
    return http.requestPost("/sys/options");
  }else{
    //服务端
    return http.requestPost(baseUrl+"/sys/options");
  }
};
```

### 🛺跨域配置

配置`nuxt.config.js`，加入`proxy`节点

```
proxy: {
    '/sys/': {
      target: 'http://localhost:8091',
    },
}
```

其中 `/sys/`是请求的路径，都懂的；不同的路径只需要写上第一段即可；

假如是`http://localhost:8091/sys`后端请求路径后再无其他的字段，那么配置为：

```json
proxy: {
    '/sys/': {
      target: 'http://localhost:8091',
    },
}
```

假如是`http://localhost:8091/sys/update`后端请求路径后还有其他的字段，那么也配置为：

```json
proxy: {
    '/sys/': {
      target: 'http://localhost:8091',
    },
}
```

## 🤖页面使用

引入

```javascript
import * as api from "../utils/api";
```

请求

```javascript
api.getProCategory().then((res) => {
  if (res.errorCode === api.SUCCESS_CODE) {
          
});
```

或者

```javascript
async asyncData({$axios}) {
  let { res } = await api.getProCategory()
  return:res
 }
```



## 🪐官方博客🚀

网站地址：[**北忘山的博客**](https://www.beiwangshan.com/)

此博客主要分享一些软件、教程以及资源类，偶尔也分享一些技术文章，需要软件的朋友可以前往获取，全部免费！

网站收入都来自大家的访问，所以不用担心，最后感谢大家多多支持！！



## ☕请我喝杯咖啡🤔

<img src="https://s1.328888.xyz/2022/05/04/hclfB.png" alt="hclfB.png" style="zoom:50%;" /><img src="https://s1.328888.xyz/2022/05/04/hct0T.png" alt="hct0T.png" style="zoom:50%;" />

