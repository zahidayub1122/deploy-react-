import {createStore,combineReducers} from 'redux'

const UserReducer = (state,action )=>
{
    switch(action.type){
        case 'UserName':{
            state.name = action.payload
            break
            
        }
        return state
        
    }
}



const Reducers = combineReducers({
    user :UserReducer,
    tweet :TweetReducers
})

const store = createStore(reducers,{
user :{
    name : "",
    Roll : ''
},
tweet : []
})

store.subscribe (()=>{
    console.log("Changes are",store.getState())
})

store.dispatch ({type :"userName", payload : 125})
store.dispatch ({type :"Roll", payload : 125})
store.dispatch ({type :"City", payload : 125})