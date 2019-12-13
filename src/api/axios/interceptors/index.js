import checkLoading from './checkLoading'
import checkDuplicateCalls from './checkDuplicateCalls'

// [!] you must return a given object so that next interceptor can get the data
// [!] You must check the order of interceptor calls

export default {
  checkLoading,
  checkDuplicateCalls
}
