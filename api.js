/*
 * @Descripttion: 
 * @Author: beiwangshan
 * @version: 
 * @Date: 2022-04-09 23:15:47
 * @LastEditors: beiwangshan
 * @LastEditTime: 2022-05-04 21:21:45
 */
import http from "@/utils/http";

const baseUrl = 'http://127.0.0.1::8091'; //后端api 地址
export const DomainUrl ="http://127.0.0.1::8091";

// export const baseImageUrl='http://localhost:8091/portal/image/'
export const SUCCESS_CODE = '00000';
export const FAILURE_CODE = '00001';

export const EMAIL_REGX = '^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$'


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

