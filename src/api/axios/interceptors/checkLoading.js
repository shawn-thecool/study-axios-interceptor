// [!] you must return a given object so that next interceptor can get the data
// [!] You must check the order of interceptor calls

const onReqSuccess = req => {
  req._isLoading = true
  console.log('req-suc-loading')
  console.log('req', req)
  return req
}
const onReqError = err => {
  console.log('req-err-loading')
  return Promise.reject({ ...err })
}
const onResSuccess = res => {
  res.config._isLoading = false
  console.log('res-suc-loading')
  console.log('res', res)
  return res
}
const onResError = err => {
  console.log('res-err-loading')
  return Promise.reject({ ...err })
}

export default {
  onReqSuccess,
  onReqError,
  onResSuccess,
  onResError
}

// const sample = payload => {
//   // ... your code goes here
//   return payload
// }

// const onSuccessRequest = _msg => req => {
//   console.log({ req, _msg })
//   return req
// }
// const onSuccessResponse = _msg => res => {
//   console.log({ res, _msg })
//   return res
// }
// const onError = _msg => error => {
//   console.log({ error, _msg })
//   return Promise.reject()
// }
