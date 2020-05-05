import http from '@/utils/request'

export const userLogin = data => {
    var param = {
        username: data.username,
        password: data.password
    }

    return http.post('/user/login/', {}, param)
}

export const getInfo = param => {
    return http.get('/admin/user/info', {}, {'access_token': param})
}


export const userLogout = param => {
    return http.delete('/auth/token/' + param)
}

export function fetchList(query) {
    return http.get('/admin/user/page', {}, query)
}


