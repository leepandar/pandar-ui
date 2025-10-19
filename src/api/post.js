import axios from '~/axios'

//添加岗位
export function addPostApi(data) {
    return axios.post('/sys/post/add', data)
}

//删除岗位
export function deletePostByPostIdApi(postId) {
    return axios({
        method: 'DELETE',
        url: '/sys/post/delete',
        params: {
            postId: postId
        }
    })
}

//修改岗位
export function updatePostByPostIdApi(data) {
    return axios.put('/sys/post/edit', data)
}

//获取岗位列表 - 分页
export function getPagePostListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/post/page',
        params: params
    })
}

//获取岗位详细信息
export function getPostByPostIdApi(postId) {
    return axios.get(`/sys/post/${postId}`)
}
