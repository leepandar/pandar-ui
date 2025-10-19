import axios from '~/axios'

//添加部门
export function addDeptApi(data) {
    return axios.post('/sys/dept/add', data)
}

//删除部门
export function deleteDeptByDeptIdApi(deptId) {
    return axios({
        method: 'DELETE',
        url: '/sys/dept/delete',
        params: {
            deptId: deptId
        }
    })
}

//修改部门
export function updateDeptByDeptIdApi(data) {
    return axios.put('/sys/dept/edit', data)
}

//获取部门树 -> 部门管理中使用
export function getDeptListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/dept/list',
        params: params
    })
}

//获取部门树(只查询状态为正常的部门)
export function getEnableDeptListApi() {
    return axios.get("/sys/dept/enable/list")
}

//获取部门详细信息
export function getDeptByDeptIdApi(deptId) {
    return axios.get(`/sys/dept/${deptId}`)
}
