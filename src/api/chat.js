import http from '@/utils/request'
export function getChatList() {
    return http.get('/chat/msgList', {})
}

