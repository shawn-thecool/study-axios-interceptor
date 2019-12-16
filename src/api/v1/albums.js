import useRequest from '../index'

const getUsers = () => {
  const REQUEST_CONFIG = {
    method: 'get',
    url: 'api/v1/albums'
  }
  return useRequest(REQUEST_CONFIG)
}

const getError = () => {
  const REQUEST_CONFIG = {
    method: 'get',
    url: 'api/v1/albums/test'
  }
  return useRequest(REQUEST_CONFIG)
}

const getUserByName = userName => {
  const REQUEST_CONFIG = {
    method: 'get',
    url: `api/v1/albums/${userName}`
  }
  return useRequest(REQUEST_CONFIG)
}

const createAlbum = userInfo => {
  const REQUEST_CONFIG = {
    method: 'post',
    url: 'api/v1/albums',
    body: { ...userInfo }
  }
  return useRequest(REQUEST_CONFIG)
}

const updateAlbumByName = (userName, userInfo) => {
  const REQUEST_CONFIG = {
    method: 'put',
    url: `api/v1/albums/${userName}`,
    body: { ...userInfo }
  }
  return useRequest(REQUEST_CONFIG)
}

export default {
  getUsers,
  getUserByName,
  createAlbum,
  updateAlbumByName,
  getError
}
