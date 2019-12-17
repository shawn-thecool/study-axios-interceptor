// [!] you must return a given object so that next interceptor can get the data
// [!] You must check the order of interceptor calls

const onReqSuccess = req => {
  req._isLoading = true
  console.log('inter-req-suc', req)
  return req
}
const onResSuccess = res => {
  res.config._isLoading = false
  console.log('inter-res-suc', res)
  return res
}
const onReqError = err => {
  err._isLoading = false
  return Promise.reject({ ...err })
}
const onResError = err => {
  err.config._isLoading = false
  return Promise.reject({ ...err })
}

export default {
  onReqSuccess,
  onResSuccess,
  onReqError,
  onResError
}

// spiner Array.some = true
// dom spiner global context
// 전달 방식 / 동작 방식