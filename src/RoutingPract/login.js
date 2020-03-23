import {createStore} from 'redux'
import { func, string } from 'prop-types'

const red = function(state,action){
    if(action.type=="INC")
    {
        return state+action.payload
    }
    if(action.type = "Dec"){
        return state-action.payload
    }

}

 store.subscribe(()=>{
     console.log("Store has changed",store.getState())
 })

const store = createStore (rducer,0)

store.dispatch({type :"INC",payload : 2})
store.dispatch({type:"Inc2",payload:25})
store.dispatch ({type:"iNC",payload:25})