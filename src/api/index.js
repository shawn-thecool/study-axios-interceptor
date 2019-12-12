import axiosInstance from './axios.instance'

export const useRequest = config => axiosInstance(config)
export const useResponse = config => axiosInstance(config)
