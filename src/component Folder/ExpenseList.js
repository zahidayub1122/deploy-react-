import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import expense from '../selector/expense'


const ExpenseList =(props)=>(
    <div>
        <h6>Expense list </h6>
        {props.Expenses.map((expense)=>{
            return <ExpenseListItem {...expense}/>
        })}
    </div>
)

const mapStateToProps = (state)=>{
    return {
        Expenses : state.expenses
    }
}


export default connect(mapStateToProps)(ExpenseList);
 