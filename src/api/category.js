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



/**
 * 根据ID获取分类数据
 */
export function getById(id) {
    return request({
        url: `/category/getById/${id}`,
        method: 'get',
    })
}