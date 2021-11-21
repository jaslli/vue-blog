import axios from 'axios'

// 创建axios实例
const service = axios.create({
    // 请求超时时间
    timeout: 5000
})

// response拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code === 20000) {
            return res
        } else {
            // Message({
            //     message: res.message || 'Error',
            //     type: 'error',
            //     duration: 5 * 1000
            // })
        }
    },
    error => {
        console.log('err' + error)
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // })
        return Promise.reject(error)
    }

)

export default service