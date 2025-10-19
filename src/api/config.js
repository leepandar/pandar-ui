import axios from '~/axios'

//添加参数
export function addConfigApi(data) {
    return axios.post('/sys/config/add', data)
}

//删除参数
export function deleteConfigByConfigIdApi(configId) {
    return axios({
        method: 'DELETE',
        url: '/sys/config/delete',
        params: {
            configId: configId
        }
    })
}

//修改参数
export function updateConfigByConfigIdApi(data) {
    return axios.put('/sys/config/edit', data)
}

//获取参数列表 - 分页
export function getPageConfigListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/config/page',
        params: params
    })
}

//获取参数详细信息
export function getConfigByConfigIdApi(configId) {
    return axios.get(`/sys/config/${configId}`)
}

