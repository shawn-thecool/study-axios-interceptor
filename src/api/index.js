import axiosInstance from './axios'

export const useRequest = config => axiosInstance({ ...config })

// interceptor ..

// 1. auth -- axios.header
// 2. timestemp 중복 호출방지 - 강제성
// 3. loading. spec        - 강제성
// 4. obj[key]

// api = {
//   testList: {
//     getList: 1289371298124
//   }
// }
