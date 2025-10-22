import axios from '~/axios'

//获取操作日志列表 - 分页
export function getPageOperlogListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/operlog/page',
        params: params
    })
}

//获取操作日志详细信息
export function getOperlogByOperIdApi(operId) {
    return axios.get(`/sys/operlog/${operId}`)
}
