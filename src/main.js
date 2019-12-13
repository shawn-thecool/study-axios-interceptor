import userAPI from './api/v1/albums'
console.log('main.js')

userAPI.getUsers()
  .then(data => {
    console.log('comp-success', data)
    // 데이터 정제 - 스토어링 - 스펙정의
  })
  .catch(error => {
    console.log('comp-error', error)
  })
