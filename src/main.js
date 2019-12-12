import { useRequest } from './api'
console.log('main.js')

useRequest({
  method: 'get',
  url: 'api/v1/albums'
})
  .then(data => {
    console.log('comp-success', data)
  })
  .catch(error => {
    console.log('comp-error', error)
  })
