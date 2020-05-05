import { getToken} from '@/utils/auth'
import { websocketApi } from '@/settings'
import * as types from '../types.js'

const state = {
  websock:null
}

const mutations = {
  [types.STAFF_UPDATEWEBSOCKET](state, websock) {
        state.websock = websock
    }
}
const actions = {
    // 用到 ES2015 的参数解构来简化代码（特别是我们需要调用 commit 很多次的时候）
    STAFF_WEBSOCKET ({ commit }) {
      let token = getToken()
    if (token=="undefined"||token == null) {
          console.log("error")
          return
        }
      const wsuri = websocketApi+"/"+token
      commit(types.STAFF_UPDATEWEBSOCKET, new WebSocket(wsuri))
      // 只有定义了onopen方法，才能继续实现接收消息，即在使用的地方调用onmessage方法。
      state.websock.onopen = function () {
      }
      // 心跳包，30s左右无数据浏览器会断开连接Heartbeat
      setInterval(function () {
        state.websock.send(JSON.stringify({
          'content': true
        }))
      }, 30000)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  
