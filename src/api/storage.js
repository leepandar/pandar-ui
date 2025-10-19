import axios from '~/axios'

//添加存储
export function addStorageApi(data) {
    return axios.post('/sys/storage/add', data)
}

//删除存储
export function deleteStorageByStorageIdApi(storageId) {
    return axios({
        method: 'DELETE',
        url: '/sys/storage/delete',
        params: {
            storageId: storageId
        }
    })
}

//修改存储
export function updateStorageByStorageIdApi(data) {
    return axios.put('/sys/storage/edit', data)
}

//获取存储列表 - 分页
export function getPageStorageListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/storage/page',
        params: params
    })
}

//获取存储详细信息
export function getStorageByStorageIdApi(storageId) {
    return axios.get(`/sys/storage/${storageId}`)
}
