import axios from 'axios'
import interceptor from './axios.interceptor'

// create axios instance
const instance = axios.create()

// set default header config
instance.defaults.headers['Accept'] = 'application/json'
instance.defaults.headers['Content-Type'] = 'application/json'

// set default config
instance.defaults.baseURL = 'http://172.25.101.218:3000'
instance.defaults.timeout = 10000

// set default config - fn
instance.defaults.validateStatus = status => status >= 200 && status < 300 //default
// instance.defaults.onUploadProgress = progressEvent => console.log('onUploadProgress$ : ', JSON.stringify(progressEvent))
// instance.defaults.onDownloadProgress = progressEvent => console.log('onDownloadProgress : ', JSON.stringify(progressEvent))

// set interceptor for request
instance.interceptors.request.use(
  interceptor.onSuccessRequest('req-interceptor-success-1'),
  interceptor.onError('req-interceptor-error-1')
)

instance.interceptors.request.use(
  interceptor.onSuccessRequest('req-interceptor-success-2'),
  interceptor.onError('req-interceptor-error-2')
)

instance.interceptors.request.use(
  interceptor.onSuccessRequest('req-interceptor-success-3'),
  interceptor.onError('req-interceptor-error-3')
)

// set interceptor for response
instance.interceptors.response.use(
  interceptor.onSuccessResponse('res-interceptor-success-1'),
  interceptor.onError('res-interceptor-error-1')
)

instance.interceptors.response.use(
  interceptor.onSuccessResponse('res-interceptor-success-2'),
  interceptor.onError('res-interceptor-error-2')
)

instance.interceptors.response.use(
  interceptor.onSuccessResponse('res-interceptor-success-3'),
  interceptor.onError('res-interceptor-error-3')
)

// export fresh axios instance
export default instance
