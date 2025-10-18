import axios from '~/axios'

//添加岗位
export function addPostApi(data) {
    return axios.post('/sys/post/addPost', data)
}

//删除岗位
export function deletePostByPostIdApi(postId) {
    return axios({
        method: 'DELETE',
        url: '/sys/post/deletePostByPostId',
        params: {
            postId: postId
        }
    })
}

//修改岗位
export function updatePostByPostIdApi(data) {
    return axios.put('/sys/post/updatePostByPostId', data)
}

//获取岗位列表 - 分页
export function getPagePostListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/post/getPagePostList',
        params: params
    })
}

//获取岗位详细信息
export function getPostByPostIdApi(postId) {
    return axios.get(`/sys/post/getPostByPostId/${postId}`)
}
