import axios from '~/axios'

//添加用户
export function addUserApi(data) {
    return axios.post('/sys/user/add', data)
}

//删除用户
export function deleteUserByUserIdApi(userId) {
    return axios({
        method: 'DELETE',
        url: '/sys/user/delete',
        params: {
            userId: userId
        }
    })
}

//修改用户
export function updateUserByUserIdApi(data) {
    return axios.put('/sys/user/edit', data)
}

//获取用户列表 - 分页
export function getPageUserListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/user/page',
        params: params
    })
}

//获取用户详细信息
export function getUserByUserIdApi(userId) {
    return axios.get(`/sys/user/${userId}`)
}

//获取用户信息
export function getUserInfoApi() {
    return axios.get('/sys/user/info')
}

//获取图形验证码
export function getImageCaptchaApi() {
    return axios.get('/sys/user/captcha')
}

//登录
export function loginApi(loginForm) {
    return axios.post('/auth/login', {
        username: loginForm.username,
        password: loginForm.password,
        captcha: loginForm.captcha,
        captchaId: loginForm.captchaId
    })
}

//修改密码
export function resetPasswordApi(rePasswordForm) {
    return axios.post('/sys/user/resetPassword', {
        oldPassword: rePasswordForm.oldPassword,
        newPassword: rePasswordForm.newPassword
    })
}

//修改用户头像
export function updateUserAvatarApi(userAvatar) {
    let params = new FormData();
    params.append('userAvatar', userAvatar);
    return axios.post('/sys/user/avatar', params)
}

//用户设置 -> 修改用户信息
export function updateUserInfoApi(form) {
    return axios.post('/sys/user/info', form)
}

//退出
export function logoutApi() {
    return axios.post('/auth/logout')
}
