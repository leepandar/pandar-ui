import axios from '~/axios'

//添加公告
export function addNoticeApi(data) {
    return axios.post('/sys/notice/addNotice', data)
}

//删除公告
export function deleteNoticeByNoticeIdApi(noticeId) {
    return axios({
        method: 'DELETE',
        url: '/sys/notice/deleteNoticeByNoticeId',
        params: {
            noticeId: noticeId
        }
    })
}

//修改公告
export function updateNoticeByNoticeIdApi(data) {
    return axios.put('/sys/notice/updateNoticeByNoticeId', data)
}

//获取公告列表 - 分页 -> 公告管理使用
export function getPageNoticeListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/notice/getPageNoticeList',
        params: params
    })
}

//获取公告列表 - 分页 -> 首页使用
export function getPageHomeNoticeListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/notice/getPageHomeNoticeList',
        params: params
    })
}

//获取公告详细信息
export function getNoticeByNoticeIdApi(noticeId) {
    return axios.get(`/sys/notice/getNoticeByNoticeId/${noticeId}`)
}
