import request from '@/util/request'

/**
 * 分页获取文章数据
 */
export function pageselect(current, limit) {
    return request({
        url: `/article/pageselect/${current}/${limit}`,
        method: 'get',
    })
}


/**
 * 根据分类ID进行的分页获取文章数据
 */
export function page(current, limit, categoryId) {
    return request({
        url: `/article/pageselect/${current}/${limit}/${categoryId}`,
        method: 'get',
    })
}


/**
 * 根据文章ID获取文章数据
 */
export function getById(articleId) {
    return request({
        url: `/article/getById/${articleId}`,
        method: 'get',
    })
}