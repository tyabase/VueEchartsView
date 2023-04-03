// import axios from "axios"
// import sysConst from './sysConst'
// const fetch = (method = 'GET', url, param = '') => {
//     // 处理 url
//     url = `${sysConst.baseUrl}${url}`
//     return new Promise((resolve, reject) => {
//         axios({
//             method: method,
//             url: url,
//             changeOrigin: true,
//             data: JSON.stringify(param)
//         }).then((res) => {
//             resolve(res.data)
//         }, error => {
//             reject(error)
//         }).catch((error) => {
//             reject(error)
//         })
//     })
// }

// const get = (url) => {
//     return fetch('GET', url)
// }

// const post = (url, data) => {
//     return fetch('POST', url, data)
// }


// export {
//     get,
//     post,
// }