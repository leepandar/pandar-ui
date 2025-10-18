import axios from '~/axios'

//权限类型
export const permType = {
    M: {key: 'M', value: '菜单'},
    B: {key: 'B', value: '按钮'}
}

//添加权限
export function addPermApi(data) {
    return axios.post('/sys/permission/addPerm', data)
}

//删除权限
export function deletePermByPermIdApi(permId) {
    return axios({
        method: 'DELETE',
        url: '/sys/permission/deletePermByPermId',
        params: {
            permId: permId
        }
    })
}

//修改权限
export function updatePermByPermIdApi(data) {
    return axios.put('/sys/permission/updatePermByPermId', data)
}

//获取权限树
export function getPermListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/permission/getPermList',
        params: params
    })
}


//获取系统租户权限树(只查询启用的权限)
export function getEnablePermListApi() {
    return axios.get("/sys/permission/getEnablePermList")
}

//获取租户权限树(只查询启用的权限)
export function getTenantEnablePermListApi() {
    return axios.get("/sys/permission/getTenantEnablePermList")
}

//获取权限详细信息
export function getPermByPermIdApi(permId) {
    return axios.get(`/sys/permission/getPermByPermId/${permId}`)
}
