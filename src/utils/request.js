import axios from 'axios'
import store from '@/store'
import config from '@/config'
// import { getToken } from '@/utils/auth'
import { Toast } from 'vant';

import errorCode from '@/utils/errorCode'


//取消请求
let CancelToken = axios.CancelToken
let cancel, promiseArr = {}

// 请求超时的时间限制
axios.defaults.timeout = 30000
// 请求域名
// axios.defaults.baseURL = config.host

// request interceptor
axios.interceptors.request.use(
  config => {
    if (promiseArr[config.url]) {
      promiseArr[config.url]('操作取消')
      promiseArr[config.url] = cancel
    } else {
      promiseArr[config.url] = cancel
    }
    if (store.getters.token) {
      config.headers.common['Authorization'] = 'Bearer ' + store.getters.token // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    config.header = {
      'Content-Type': 'application/json'
    }

    const headers = config.headers
    if (headers['content-type'] === 'application/octet-stream;charset=utf-8') {
      return config.data
    }

    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
axios.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    const errMsg = error.toString()
    console.log(error.response)

    let data = error.response ? error.response.data : '';
    let code = data.code
    if (!data) {
      return
    }
    //  500和操作取消不提示 其他提示toast
    if (code != '500' && errMsg.indexOf('Cancel') < 0) {
      Toast.fail(
          data.message || errorCode[code] || errorCode['default'],
      )
    }
    return Promise.reject(error)
  }
)

// 封装请求
const request = (url, data, method, params, type) => {
    return axios({
      method: method,
      url: url,
      params: params,
      responseType: type ? type : '',
      data: data,
      cancelToken: new CancelToken(c => {//取消多次重复请求
        cancel = c
      })
    })
}

export default {
    request (url, param, method, params, type) {
      return request(config.host + url, param, method, params, type)
    },
    get (url, data, params, type) {
      return request(config.host + url, data, 'get', params, type)
    },
    post (url, data, params, type) {
      return request(config.host + url, data, 'post', params, type)
    },
    put (url, data, params, type) {
      return request(config.host + url, data, 'put', params, type)
    },
    delete (url, data, params, type) {
      return request(config.host + url, data, 'delete', params, type)
    },
}
