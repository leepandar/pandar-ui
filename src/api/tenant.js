import axios from '~/axios'

//添加租户
export function addTenantApi(data) {
    return axios.post('/sys/tenant/addTenant', data)
}
//删除租户
export function deleteTenantByTenantIdApi(tenantId) {
    return axios({
        method: 'DELETE',
        url: '/sys/tenant/deleteTenantByTenantId',
        params: {
            tenantId: tenantId
        }
    })
}
//修改租户
export function updateTenantByTenantIdApi(data) {
    return axios.put('/sys/tenant/updateTenantByTenantId', data)
}
//获取租户列表 - 分页
export function getPageTenantListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/tenant/getPageTenantList',
        params: params
    })
}
//获取租户详细信息
export function getTenantByTenantIdApi(tenantId) {
    return axios.get(`/sys/tenant/getTenantByTenantId/${tenantId}`)
}
