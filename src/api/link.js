import request from '@/util/request'

/**
 * 获取友链信息
 */
export function getList() {
    return request({
        url: '/link/listAll',
        method: 'get',
    })
}