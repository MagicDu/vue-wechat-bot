import http from '@/utils/request'

export const userLogin = data => {
    var grantType = 'password'
    var clientId = 'cloud'
    var clientSecret = 'cloud'
    var param = {
        username: data.username,
        password: data.password,
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: grantType
    }

    return http.post('/auth/oauth/token', {}, param)
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


