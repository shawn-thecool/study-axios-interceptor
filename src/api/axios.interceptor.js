// [!] you must return a given object so that next interceptor can get the data
// [!] You must check the order of interceptor calls

const sample = payload => {
  // ... your code goes here
  return payload
}

const onSuccessRequest = _msg => req => {
  console.log({ req, _msg })
  return req
}
const onSuccessResponse = _msg => res => {
  console.log({ res, _msg })
  return res
}
const onError = _msg => error => {
  console.log({ error, _msg })
  return Promise.reject()
}

export default {
  sample,
  onSuccessRequest,
  onSuccessResponse,
  onError
}
