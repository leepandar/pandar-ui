import axios from '~/axios'

//上传文件
export function uploadFileApi(data, onUploadProgress) {
    return axios.post('/sys/file/upload', data, {
        onUploadProgress:(e)=>{
            //获取上传进度
            if (onUploadProgress) {
                onUploadProgress(e)
            }
        }
    })
}

//删除文件 -> 根据文件URL删除
export function deleteFileApi(fileId) {
    return axios({
        method: 'DELETE',
        url: '/sys/file/delete',
        params: {
            fileId: fileId
        }
    })
}

//获取文件列表 - 分页
export function getPageFileListApi(params) {
    return axios({
        method: 'GET',
        url: '/sys/file/page',
        params: params
    })
}
