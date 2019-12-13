import { useRequest } from '../index'

const getUsers = async () => {
  try {
    let d = await useRequest({
      method: 'get',
      url: 'api/v1/albums'
    })
    let d1 = await parser(d)
    return d1
  } catch (error) {
    // 내부녀석 throw new Error ('msg')
    console.log(error.message)
    // commonErrorHandler(error)
    return 'err'
  }
}

const getUserByID = () => {}

export default {
  getUsers,
  getUserByID
}
