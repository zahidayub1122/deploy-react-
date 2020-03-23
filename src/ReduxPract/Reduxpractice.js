// import {createStore} from 'redux'

// const incrementCount = ({IncrementBy=1}={})=>({
//   type:'INC' ,
//   IncrementBy
// //   IncrementBy:typeof payload.IncrementBy==='number'?payload.IncrementBy:1
// })

// const DescrmentCount=({DescrementBy=1}={})=>({
//     type:'DESC',
//     DescrementBy
// })


// const countReducer =(state={count:0},action)=>{

//     switch(action.type)
//     {
//         case 'INC':
//        //   const IncrementBy= typeof action.IncrementBy==='number'?action.IncrementBy:1;
            
//                 return{
//                     count:state.count+action.IncrementBy
//                 }
            
//             case 'DESC':
                 
//                     return {
//                         count: state.count-action.DescrementBy
//                     }
                
//                 default:
//                     return state;
//     }
   
// };
    
// const store = createStore(countReducer)

// // store.dispatch({
// //     type:'zahid',
// //     IncrementBy:20
// // })

// store.dispatch(incrementCount({IncrementBy:20}))
// store.dispatch(DescrmentCount())
// store.dispatch(DescrmentCount({DescrementBy:2}))

// store.subscribe(()=>{
//     console.log(store.getState()
 
//  )}
 
 






































// // // Argument Destructing

// // // const add = ({a,b},c)=>{

// // //    return a+b+c

// // // }

// // // console.log(add({a:20,b:20},200))


// // const incrementCount = ({IncrementBy=1}={})=>({
// //   type:'INC' ,
// //   IncrementBy
// // //   IncrementBy:typeof payload.IncrementBy==='number'?payload.IncrementBy:1
// // })

// // const DescrmentCount=({DescrementBy=1}={})=>({
// //     type:'DESC',
// //     DescrementBy
// // })

// // const store = createStore((state={count:0},action)=>{

// //      switch(action.type)
// //      {
// //          case 'INC':
// //         //   const IncrementBy= typeof action.IncrementBy==='number'?action.IncrementBy:1;
             
// //                  return{
// //                      count:state.count+action.IncrementBy
// //                  }
             
// //              case 'DESC':
                  
// //                      return {
// //                          count: state.count-action.DescrementBy
// //                      }
                 
// //                  default:
// //                      return state
// //      }
    
// // })
     
// // store.subscribe(()=>{
// //     console.log(store.getState()

// // )})

// // // store.dispatch({
// // //     type:'zahid',
// // //     IncrementBy:20
// // // })

// // store.dispatch(incrementCount({IncrementBy:20}))
// // store.dispatch(DescrmentCount())
// // store.dispatch(DescrmentCount({DescrementBy:2})
// //   