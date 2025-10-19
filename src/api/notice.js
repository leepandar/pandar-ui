import axios from '~/axios'

//添加公告
export function addNoticeApi(data) {
    return axios.post('/sys/notice/add', data)
}

//删除公告
export function deleteNoticeByNoticeIdApi(noticeId) {
    return axios({
        method: 'DELETE',
        url: '/sys/notice/delete',
        params: {
            noticeId: noticeId
        }
    })
}

//修改公告
export function updateNoticeByNoticeIdApi(data) {
    return axios.put('/sys/notice/edit', data)
}

//获取公告列表 - 分页 -> 公告管理使用
export function getPageNoticeListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/notice/page',
        params: params
    })
}

//获取公告详细信息
export function getNoticeByNoticeIdApi(noticeId) {
    return axios.get(`/sys/notice/${noticeId}`)
}
