import vue from '../main'
let axios = vue.$axios
let Message = vue.$message
// import QS from 'qs'

// 环境的切换
if (process.env.NODE_ENV == 'development') { 
    axios.defaults.baseURL = 'https://www.hotmine.cn/sys/';}
else if (process.env.NODE_ENV == 'debug') { 
    axios.defaults.baseURL = 'https://www.hotmine.cn/sys/';
} 
else if (process.env.NODE_ENV == 'production') { 
    axios.defaults.baseURL = 'https://www.hotmine.cn/sys/';
}
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.error(error);
    }
)
axios.interceptors.response.use(
    response => {
        if(response.status === 200){
            return Promise.resolve(response)
        }else {
            Promise.reject(response)
        }
    },
    error => {
        if(error.response.status){
            switch (error.response.status){
                case 404:
                Message.error("请求不存在")
            }
        }
        return Promise.reject(error.response)
    }
)

export function get(url,param){
    return new Promise( (resolve,reject) => {
        axios.get(url,{
            params: param
        }).then(res => {
            resolve(res.data)
        }).catch( err => {
            reject(err.data)
        })
    })
}
export function post(url,param){
    return new Promise( (resolve,reject) => {
        axios.post(url,param).then(res => {
            resolve(res.data)
        }).catch( err => {
            reject(err.data)
        })
    })
}