import moment from 'moment'

// [!] you must return a given object so that next interceptor can get the data
// [!] You must check the order of interceptor calls

const getTimestamp = () => new Date().getTime()
const test = a => {
  const b = monment()
  console.log('now', a.diff(b))
}

const onReqSuccess = req => {
  req._timestamp = moment()
  console.log('req-suc-duple')
  console.log(req)
  return req
}
const onReqError = err => {
  console.log('req-err-duple')
  return Promise.reject({ ...err })
}
const onResSuccess = res => {
  console.log('res-suc-duple')
  console.log(res)
  test(res.config._timestamp)
  return res
}
const onResError = err => {
  console.log('res-err-duple')
  return Promise.reject({ ...err })
}

export default {
  onReqSuccess,
  onReqError,
  onResSuccess,
  onResError
}
