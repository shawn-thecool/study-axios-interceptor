import userAPI from './api/v1/albums'

console.log('main.js') // component = home

// userAPI
//   .getUsers()
//   .then(({ data }) => console.log('comp-suc', data))
//   .catch(({ err, handler }) => handler(err))

userAPI
  .getError()
  .then(({ data }) => console.log('comp-suc', data))
  .catch(({ err, handler }) => {
    //handler(err)
    console.log('custom-error', err)
  })

// Promise.all([userAPI.getUsers(), userAPI.getError()])
//   .then(res => {
//     console.log('11', res)
//   })
//   .catch(err => {
//     console.log('11-err', err)
//   })

// <root>
//   <Context.provider>
//     <header></header> // memo
//     <rotuer>
//       <home>
//         <Context.provider>
//           <popup></popup> // hooks
//           <loading></loading> // hooks
//         </Context.provider>
//       </home>
//       <about>
//         <Context.provider>
//           <popup></popup> // hooks
//           <loading></loading> // hooks
//         </Context.provider>
//       </about>
//     </rotuer>
//     <footer></footer> // memo
//     <popup></popup> // context
//     <loading></loading> // context
//   </Context.provider>
// </root>

// respone / err hanler 사용 가능 / _isLoading 뽑아서 사용 가능
