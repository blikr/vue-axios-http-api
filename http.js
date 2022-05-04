/*
 * @Descripttion: 
 * @Author: beiwangshan
 * @version: 
 * @Date: 2022-04-10 12:53:01
 * @LastEditors: beiwangshan
 * @LastEditTime: 2022-04-11 23:09:53
 */
import axios from 'axios';

//携带证书
axios.defaults.withCredentials = true;
//设置超时时间
axios.defaults.timeout = 6000000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www=from-urlencoded'

export default {

    //get请求
    requestGet(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, params).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // post请求
    requestPost(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.post(url, params).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // delete请求
    requestDelete(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.delete(url, params).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // put请求
    requestPut(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.put(url, params).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    // axios 传递json格式的post方法
    postJson(url, params = {}, json = false) {
        // json格式请求头
        const headerJSON = {
          "Content-Type": "application/json"
        };
        // FormData格式请求头
        const headerFormData = {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        };
        return new Promise((resolve, reject) => {
          axios
            .post(url, json ? JSON.stringify(params) : QS.stringify(params), {
              headers: json ? headerJSON : headerFormData
            })
            .then(res => {
              resolve(res.data);
            })
            .catch(err => {
              reject(err.data);
            });
        });
}
}