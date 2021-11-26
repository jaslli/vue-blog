import request from '@/util/request'

/**
 * 分页获取文章数据
 * @param {long} current 
 * @param {long} limit 
 * @returns 文章分页数据
 */
export function pageselect(current, limit) {
    return request({
        url: `/article/pageselect/${current}/${limit}`,
        method: 'get',
    })
}

/**
 * 根据分类ID进行的分页获取文章数据
 * @param {long} current 
 * @param {long} limit 
 * @param {String} categoryId 
 * @returns 文章分页数据
 */
export function page(current, limit, categoryId) {
    return request({
        url: `/article/pageselect/${current}/${limit}/${categoryId}`,
        method: 'get',
    })
}

/**
 * 根据文章ID获取文章实体数据
 * @param {String} articleId 
 * @returns 文章实体数据
 */
export function getById(articleId) {
    return request({
        url: `/article/getById/${articleId}`,
        method: 'get',
    })
}

/**
 * 根据文章ID获取文章内容
 * @param {String} articleId 
 * @returns 文章内容
 */
export function getContent(articleId) {
    return request({
        url: `/article-content/getById/${articleId}`,
        method: 'get',
    })
}