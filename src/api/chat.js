import http from '@/utils/request'
export function getChatList() {
    return http.get('/chat/msgList', {})
}

export function getChatDetail(param) {
    return http.get('/chat/chatDetail', {},{"userId":param})
}

