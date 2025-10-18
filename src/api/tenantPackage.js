import axios from '~/axios'

//添加套餐
export function addTenantPackageApi(data) {
    return axios.post('/sys/tenantPackage/addTenantPackage', data)
}
//删除租户套餐
export function deleteTenantPackageByTenantPackageIdApi(tenantPackageId) {
    return axios({
        method: 'DELETE',
        url: '/sys/tenantPackage/deleteTenantPackageByTenantPackageId',
        params: {
            tenantPackageId: tenantPackageId
        }
    })
}
//修改套餐
export function updateTenantPackageByTenantPackageIdApi(data) {
    return axios.put('/sys/tenantPackage/updateTenantPackageByTenantPackageId', data)
}
//获取租户套餐列表 - 分页
export function getPageTenantPackageListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/tenantPackage/getPageTenantPackageList',
        params: params
    })
}
//获取租户套餐详细信息
export function getTenantPackageByTenantPackageIdApi(tenantPackageId) {
    return axios.get(`/sys/tenantPackage/getTenantPackageByTenantPackageId/${tenantPackageId}`)
}

