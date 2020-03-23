// import {createStore,combineReducers} from 'redux'



// const addExpense = ({
// description='',
// note='10',
// amount=0,
// createAt=0
// }={})=>({
//     type:'ADD_Expense',
//     expense : {
//         description,
//         note,
//         amount,
//         createAt    
//     }

// })

// const editExpense=(id,update)=>({
//     type:'edit_expense',
//     id,
//     update

// })

// const expenseReducerDefault=[]
// const expenseReducer = (state=expenseReducerDefault,action)=>{
//     switch(action.type)
//     {
        
//          case 'ADD_Expense':
//             {
//                 return  [
//                     ...state,
//                     action.expense
//                 ]
//             }
//       case 'edit_expense':
//           {
//               return state.map((expense)=>{
//                if(expense.note==action.note){
//                   return {
//                       ...expense,
//                       ...action.note
//                   }
//                }
//               })
//           }
//         default:
//             return state
 
//     }

    
// }

// const filterReducerDefault={
//     text:'',
//     sortBy:'date',
//     sortDate :undefined

// }
// const filterReducer = (state=filterReducerDefault, action)=>{
//     switch(action.type)
//     {
//         default:
//             return state
//     }

// }

// const store =  createStore(
//     combineReducers({
//         expenses:expenseReducer,
//         someOther:filterReducer
//     })
// )
// store.subscribe(()=>{
//     console.log(store.getState())
// })

// const expenseOne = store.dispatch(addExpense({description:'Rent',amount:100}))
// const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:200}))

// store.dispatch(editExpense(expenseTwo.expense.note,{note:20}))

// const demoState = {
//     expense :[{
//         id :'afjafld',
//         description:'Januarr',
//         note:'thfaldfjladfhalfja',
//         amount:5400,
//         createAt :0
//     }],
//     filters:{
//         text:'rent',
//         sortBy:'amount',
//         sortDate : undefined,
//         endDate : undefined
//     }
// }

// // const user = {
// //     name : 'zahd',
// //     age:'24'
// // }
// // console.log({
// //     age:25,
// //     ...user,
// //     location:'Lahore',
// //     countery:'Pakistan'
// // })
