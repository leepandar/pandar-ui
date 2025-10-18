import axios from '~/axios'

//添加角色
export function addRoleApi(data) {
    return axios.post('/sys/role/addRole', data)
}

//删除角色
export function deleteRoleByRoleIdApi(roleId) {
    return axios({
        method: 'DELETE',
        url: '/sys/role/deleteRoleByRoleId',
        params: {
            roleId: roleId
        }
    })
}

//修改角色
export function updateRoleByRoleIdApi(data) {
    return axios.put('/sys/role/updateRoleByRoleId', data)
}

//获取角色列表 - 分页
export function getPageRoleListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/role/getPageRoleList',
        params: params
    })
}

//获取角色详细信息
export function getRoleByRoleIdApi(roleId) {
    return axios.get(`/sys/role/getRoleByRoleId/${roleId}`)
}
