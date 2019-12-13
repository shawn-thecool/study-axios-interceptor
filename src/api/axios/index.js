import axios from 'axios'
import interceptor from './interceptors'

// create axios instance
const instance = axios.create()

// set default header config
instance.defaults.headers['Accept'] = 'application/json'
instance.defaults.headers['Content-Type'] = 'application/json'

// set default header auth token
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

// set default config
instance.defaults.baseURL = 'http://172.25.101.218:3000'
instance.defaults.timeout = 10000

// set default config - fn
instance.defaults.validateStatus = status => status >= 200 && status < 300 //default

// set interceptor for request - 로딩제어
instance.interceptors.request.use(interceptor.checkLoading.onReqSuccess, interceptor.checkLoading.onReqError)

// set interceptor for request - 중복방지
instance.interceptors.request.use(
  interceptor.checkDuplicateCalls.onReqSuccess,
  interceptor.checkDuplicateCalls.onReqError
)

// set interceptor for response - 중복방지
instance.interceptors.response.use(
  interceptor.checkDuplicateCalls.onResSuccess,
  interceptor.checkDuplicateCalls.onResError
)

// set interceptor for response - 로딩제어
instance.interceptors.response.use(interceptor.checkLoading.onResSuccess, interceptor.checkLoading.onResError)

// export fresh axios instance
export default instance
