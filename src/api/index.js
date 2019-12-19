import createAxiosInstance from './axios'

const setCommonExceptionHandler = err => {
  console.log('setCommonExceptionHandler', err)
}

const createRequest = (version, config) =>
  createAxiosInstance({ ...config })
    .then(res => {
      console.log('api-comm-suc', res)
      return res
    })
    .catch(err => {
      console.log('api-comm-err', err)
      return Promise.reject({ err: err, handler: setCommonExceptionHandler })
    })



export default useRequest