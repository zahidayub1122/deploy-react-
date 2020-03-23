import React from 'react'

const ExpenseListItem = ({descriptioin,amount,note})=>(
    <div>
        <h3>{descriptioin}</h3>
        <h3>{amount}-{note}</h3>

        </div>
)

export default ExpenseListItem