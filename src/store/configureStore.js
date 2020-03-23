 import {createStore,combineReducers} from 'redux'
 import expense from '../reducers/expense'
 import filters from '../reducers/filters'


 export default()=>{
    const store = createStore(
        combineReducers({
          expenses: expense,
          filters: filters
        })
      );
      
return store
 }

