import request from '@/util/request'

/**
 * 分页获取文章数据
 * @returns 
 */
export function pageselect(current, limit) {
    return request({
        url: `/article/pageselect/${current}/${limit}`,
        method: 'get',
    })
}