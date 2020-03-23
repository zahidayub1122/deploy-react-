import  React from 'react'
import ExpenseListItem from './ExpenseListItem'
import {connect} from 'react-redux'
import {setTextFilter} from '../action/filters'
const ExpenseListFilters=(props)=>(
    <div>
        <input type 
          ="text" value = {props.filter.text} 
           onChange={(e)=>{
          props.dispatch(setTextFilter(e.target.value))
        }}/>
    </div>
)

const mapStateToProps = (state)=>{
    return{
        filter : state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilters)