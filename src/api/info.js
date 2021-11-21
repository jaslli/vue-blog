import request from '@/util/request'

/**
 * 获取博客配置信息
 * @returns 
 */
export function getInfo() {
    return request({
        url: '/blog/getInfo',
        method: 'get',
    })
}