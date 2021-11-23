import request from '@/util/request'

/**
 * 获取所有分类数据
 */
export function getList() {
    return request({
        url: "/category/listAll",
        method: 'get',
    })
}