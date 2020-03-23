import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListeFilters from './ExpenseListFilters'
import ExpenseListItem from './ExpenseListItem'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseForm from '../component Folder/ExpenseForm'

const ExpenseDashboardPage = ()=>(
    <div>
        <ExpenseListFilters/>
    <ExpenseList/>
    <ExpenseForm/>
    </div>

)

export default ExpenseDashboardPage


